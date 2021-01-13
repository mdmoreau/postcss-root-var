## Purpose

Parse CSS variables declared in the `:root` selector.

## Example

```css
/* input */
:root {
  --red: #f00;
}

div {
  color: parse-var(--red);
}

/* output */
:root {
  --red: #f00;
}

div {
  color: #f00;
}
```
