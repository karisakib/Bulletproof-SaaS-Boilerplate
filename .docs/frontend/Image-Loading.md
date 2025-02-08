# Must Have img attributes

```html
<picture>
 <source
  type="image/webp"
  srcset="
/image.webp?width=100 100w
/image.webp?width=200 200w
/image.webp?width=400 400w
/image.webp?width=800 800w
"
 />
 <img
  loading="lazy"
  alt="Alt text"
  role="presentation"
  srcset="
/image.png?width=100 100w
/image.png?width=200 200w
/image.png?width=400 400w
/image.png?width=800 800w
"
  sizes="(max-width: 800px) 100vw, 50vw"
  decoding="async"
  fetchpriority="high"
  src="/image"
 />
</picture>
```
