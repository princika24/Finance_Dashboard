from enum import Enum

class SortOption(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"
    HIGHEST = "highest"
    LOWEST = "lowest"