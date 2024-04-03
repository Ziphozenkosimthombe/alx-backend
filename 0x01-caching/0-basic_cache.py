#!/usr/bin/env python3
"""
0-basic_cache
"""
from base_caching import BaseCaching



class BasicCache(BaseCaching):
    """allows storing and
    retrieving items from a dictionary
    """
    def put(self, key, item):
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        return self.cache_data.get(key, None)
