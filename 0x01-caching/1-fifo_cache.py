#!/usr/bin/env python3
"""
1-fifo_cache
"""


from collections import OrderedDict
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """
    FIFOCach that inherits from
    BaseCaching and is a caching system
    """
    def put(self, key, item):
        """
        dictionary cach_data the item
        value for the key
        """
        if key is None or item is None:
            return

        if len(self.cach_data) > BaseCaching.MAX_ITEMS:
            first_key, _ = self.cache_data.popitem(last=False)
            print(f"DISCARD: {first_key}")

        self.cache_data[key] = item

    def get(self, key):
        """
        return value in self.cache_data
        """
        return self.cache_data.get(key, None)
