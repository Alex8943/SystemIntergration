# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class WikicrawlerItem(scrapy.Item):
    #define the fields for your item here like:
    name = "WikiPageSpider", 
    allowed_domains = ["en.wikipedia.org"],
    start_urls = ["https://en.wikipedia.org/wiki/list_of_commen_missconceptions"]

    rules = (
        Rule(LinkExtractor(allow=r'/wiki'), callback='parse', follow=True),
    )

    def parse_item(self, response):
        yield {
            "url": response.url,
            'title': response.css('h1::text').get(),
            "content": response.css('p::text').get()
        }
