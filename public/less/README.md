# Useful css classes

## .box

Creates a round cornered box (4px), with 2px border, 10px padding and neat drop shadow.


## .slide

This class creates a container element for fixed side elements, that stays fixed only after a certain level of scroll

**Structure :**

```
.slide
    .topBracket
    .slider
```

The .topBracket element is used for two purposes :
- We refer to that element to know if the page is scrolled enough
- After setting position:relative to .slider, the .topBracket is still in the .slide element, so that it keeps it's width

