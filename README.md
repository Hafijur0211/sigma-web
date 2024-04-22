# sigma-web

📌 Lecture:8

Learning: Inline and block elements
In web development, "inline" and "block" are two types of HTML elements that describe how elements are displayed on a web page and how they interact with other elements.

1. inline elements:
   Inline elements are elements that flow within the content of a web page and do not start on a new line. They only take up as much width as necessary to contain their content.

- Examples: `<a>` , `<span>` , `<strong>` , `<img>` .
- You can place multiple inline elements side by side within the same line.

2. Block Elements:

- Block elements, on the other hand, start on a new line and create a "block" that takes up the full available width of their parent container by default.
- Examples:`<div>` , `<p>`, `<h1>` to `<h6>`, `<ul>` , `<ol>` , `<li>` .
- Block elements stack on top of each other vertically, creating a new block for each element, which pushes subsequent elements to a new line.

---

📌 Lecture:9

In HTML, "id" and "class" are attributes used to specify and identify elements on a web page, allowing you to style or manipulate them using CSS (Cascading Style Sheets) or interact with them using JavaScript.

1. ID (Identifier):

   1. An "id" attribute is used to give a unique identification to a specific HTML element on a page.
   2. The value of an "id" must be unique within the entire HTML document. No two elements should have the same "id" value.

2. Class:
   1. A "class" attribute is used to group and apply styles or functionality to multiple HTML elements.
   2. Multiple elements can share the same "class" attribute, and multiple elements can have the same class name.

---

📌 Lecture:10

we can display various types of media, including audio, video, iframes, and SVG, on an HTML page using the appropriate HTML elements and attributes.

1. Audio (audio element):
   To display audio on an HTML page, use the `<audio>` element. You can specify the audio file's source using the `src` attribute and include playback controls with the `controls` attribute.

- `controls`: Adds audio playback controls (play, pause, volume) to the audio element.
- `<source>`: Allows you to specify multiple audio sources with different formats for cross-browser compatibility.

2. Video (video element):
   For displaying videos, use the `<video>` element. Similar to audio, set the `src` attribute to the video file's URL and include playback controls:

- `controls`: Adds video playback controls to the video element.
- `<source>`: Specify multiple video sources with different formats for cross-browser support.

3. Embedded Media (iframe element):
   To embed external content, such as YouTube videos or other websites, use the `<iframe>` element. Set the `src` attribute to the URL of the external content:

4. SVG (svg element):
   SVG (Scalable Vector Graphics) is a vector image format based on XML (Extensible Markup Language).To include SVG on your HTML page, use the `<svg>` element. You can define SVG directly in your HTML or reference an external SVG file:

---

📌 Lecture:11

HTML5 introduced a range of semantic tags that provide meaning to the structure of web content. Semantic tags add meaning to your HTML. They tell both the browser and the developer what kind of content is being presented.

They enhance SEO, improve accessibility, and make your code easier to read and maintain.

- `<header>`: Used to represent the top section of a web page, often containing headings, logos, and navigation.
- `<nav>`: Signifies a navigation menu on a web page.
- `<section>`: Represents a thematic grouping of content on a web page.
- `<aside>`: Typically used for sidebars or content that is tangentially related to the main content.
- `<footer>`: Represents the footer of a web page, usually containing copyright information and contact details.
- `<main>`: Signifies the main content area of a web page.
- `<time>`: Used to represent time-related information, like dates and times.

---

📌 Lecture:13

- HTML Entities

HTML entities are a crucial part of HTML markup language. They enable you to display characters that are reserved in HTML or that aren't readily available on the keyboard.
HTML entities are used to represent special characters in a format that the browser can understand. They start with an ampersand (&) and end with a semicolon (;).
Reserved Characters: Characters like <, >, and & are reserved in HTML.
Special Symbols: For symbols like ©, ®, or mathematical symbols.
Non-Breaking Spaces: To create white spaces that won't break into a new line.

- `&lt;` for <
- `&gt;` for >
- `&amp;` for &
- `&nbsp;` for a non-breaking space
- `&copy;` for ©

- Quotation Tag

The HTML <q> tag is used to show that a piece of text is a short quotation within a sentence or paragraph on a web page. It puts quotation marks around the quoted text to make it clear it's a quote.

- Code Tag

The HTML `<code>` tag is a powerful element for displaying code snippets within a webpage. It preserves both spaces and line breaks, making it ideal for showcasing code.

---

📌 Lecture:14

1. What is CSS?

- CSS stands for Cascading Style Sheets. It is a stylesheet language that is used to describe the visual presentation of a web page written in HTML (Hypertext Markup Language).
- HTML creates the structure of the page, while CSS adds styling to that structure.
- CSS operates by selecting HTML elements and applying styles to them. Styles dictate the appearance of elements on a webpage. You can target HTML elements, classes, or IDs, defining properties like colors, fonts, margins, etc.

2. Key Features of CSS:

   1. Styles web pages.
   2. Works alongside HTML and XML documents.
   3. Enables responsive design for different screen sizes.
   4. Supports interactive effects like hover states and animations.
   5. Allows reusability of the same rules across multiple HTML documents.

---

📌 Lecture:15

- Inline CSS:

  1.  Inline CSS is CSS code that is directly applied to individual HTML elements within the document. You include it as a `style` attribute within the HTML tag.
  2.  Inline CSS is useful for making quick, specific styling changes to individual elements, but it's not recommended for extensive styling or for maintaining consistent styles across a website. It can also make your HTML code less clean and harder to manage.

- Internal CSS:

  1.  Internal CSS (also known as embedded CSS) is CSS code placed within the `<style>` element in the document's `<head>` section. It applies styles to elements throughout the HTML document.
  2.  Internal CSS allows you to apply styles to multiple elements within a single HTML document. It's useful when you want to keep styles specific to that document.

- External CSS:

  1.  External CSS is CSS code that is stored in separate CSS files and linked to HTML documents. This is the most common and recommended way to style web pages because it promotes separation of concerns and reusability.
  2.  To use external CSS, you create a `.css` file containing your styles and link it to your HTML document using the `<link>` element in the `<head>` section.
  3.  External CSS allows you to maintain consistent styles across multiple HTML documents, making it easier to update styles globally.

---

📌 Lecture:17

CSS selectors: In CSS (Cascading Style Sheets), selectors are used to target and apply styles to specific HTML elements. There are several types of selectors in CSS, each serving different purposes

1. Element Selector (Type Selector):

   1. Syntax: `elementName`
   2. Example: `p` selects all `<p>` elements.
   3. Purpose: It selects all elements of a specific type.

2. Class Selector:

   1. Syntax: `.className`
   2. Example: `.btn` selects all elements with `class="btn"`.
   3. Purpose: It selects elements with a specific class attribute. Multiple elements can share the same class.

3. ID Selector:

   1. Syntax: `hashtag#idName`
   2. Example: `hashtag#header` selects the element with `id="header"`.
   3. Purpose: It selects a specific element with a unique ID attribute. IDs should be unique within a document.

4. Child Selector:

   1. Syntax: `parent > child`
   2. Example: `ul > li` selects all `<li>` elements that are direct children of a `<ul>`.
   3. Purpose: It selects an element that is a direct child of another element, ensuring a specific parent-child relationship.

5. Descendant Selector:

   1. Syntax: `ancestor descendant`
   2. Example: `ul li` selects all `<li>` elements that are descendants (nested within) of a `<ul>`.
   3. Purpose: It selects elements that are descendants of a specified ancestor, regardless of their depth in the DOM tree.

6. Universal Selector:

   1. Syntax: `*`
   2. Example: `*` selects all elements on the page.
   3. Purpose: It selects all elements, and it is used to apply styles globally.

7. Pseudo-class Selector:
   1. Syntax: `:pseudo-class`
   2. Example: `a:hover` selects all `<a>` elements when they are being hovered.
   3. Purpose: Pseudo-classes are used to select elements based on their state or position, such as `:hover`, `:active`, `:nth-child`, and `:first-child`. They can be used to style elements in specific conditions.

---

📌 Lecture:18

CSS Box Model

The CSS Box model defines how elements are rendered and how their dimensions are calculated.It describes the structure of an element as a rectangular box that has content, padding, a border, and a margin.

The box model consists of four main components, which are

1. Content

   1. The innermost component of the box model is the actual content of the element. It can be text, image, video, etc.
   2. The content area is defined by the width and height properties.

2. Padding

   1. The space between the actual content and the border of the element is the padding.
   2. The padding area is defined by the property padding.

3. Border

   1. The border surrounds the content and padding and gives the visual border of the element.
   2. The border properties can be controlled using the border keyword.

4. Margin
   1. The margin is the space outside the element that separates it from other elements in the layout.
   2. The margin of the element is controlled by the margin property.

- Total Width = Width + Left Padding + Right Padding + Left Border + Right Border + Left Margin + Right Margin
- Total Height = Height + Top Padding + Bottom Padding + Top Border + Bottom Border + Top Margin + Bottom Margin

---

📌 Lecture:19

1. Font: In CSS, the font property is used to set various font-related properties in one declaration. The font property typically includes the following values:

- font-style: Specifies the style of the font, like "italic," "oblique," or "normal."
- font-weight: Sets the thickness of the font, such as "normal," "bold," or numeric values.
- font-size: Specifies the size of the font, like "12px" or "1.2em."
- line-height: Defines the height of lines of text within the element.
- font-family: Specifies the font family or list of font families to be used for rendering the text.

2. Text decoration in CSS refers to adding visual effects or decorations to text within HTML elements.

   1. text-decoration-line: This attribute specifies the type of text decoration to be applied, and it can take the following values:

- none: No decoration (default).
- underline: Adds an underline below the text.
- overline: Adds a line above the text.
- line-through: Adds a horizontal line through the text.

  2.  text-decoration-color: This attribute sets the color of the text decoration. It accepts color values such as named colors, hex codes, or RGB values.
  3.  text-decoration-style: This attribute defines the style of the text decoration line and can take values like "solid," "double," "dotted," or "dashed."
  4.  text-decoration-thickness: This attribute specifies the thickness of the line used for text decoration. It accepts values like "auto" or specific length values (e.g., "2px").
  5.  text-overflow property in CSS is used to control how text is handled when it overflows its containing element.

- ellipsis: Adds an ellipsis (...) to truncated text.
- clip: Clips the text without any indicator. 6. colors :In CSS, colors are used to define the visual appearance of elements on a web page.
- Named Colors: Use predefined color names like "red" or "blue."
- Hexadecimal Colors: Specify colors using hexadecimal codes, like "hashtag#FFA500" for orange.
- RGB Colors: Define colors based on Red, Green, and Blue values (e.g., rgb(255, 0, 0) for red).
- RGBA Colors: Similar to RGB but with an alpha value for transparency.

---

📌 Lecture:21

- CSS Specificity

CSS Specificity helps determine what style will be applied to the HTML element(s) when there are overlapping or multiple CSS rules.
It is a value or weight assigned to a CSS selector. The higher the specificity, the more precedence the selector has.

The Cascade Algorithm

CSS stands for Cascading Stylesheets. The cascade is the algorithm for solving conflicts where multiple CSS rules apply to an HTML element. The cascade algorithm has 4 distinct stages.

- Position and order of appearance: the order in which your CSS rules appear.
- Specificity: an algorithm that determines which CSS selector has the strongest match.
- Origin: the order in which CSS appears and where it comes from, whether that is a browser style, CSS from a browser extension, or your authored CSS.
- Importance: some CSS rules are weighted more heavily than others, especially with the !important rule type.
- Inline Style > ID Selector > Class or Attribute Selector > Element Selector > Universal Selector
- Specificity Calculation

  1.  To calculate specificity, assign a value to each part of the selector:
  2.  Universal Selector: 0
  3.  Element selectors and pseudo-elements: 1
  4.  Class selectors, attribute selectors, and pseudo-classes: 10
  5.  ID selectors: 100
  6.  Inline styles: 1000
  7.  Then, add up the values of all the parts in the selector.

---

📌 Lecture:22

In Cascading Style Sheets (CSS), you can use various units to define measurements and sizes for elements.

1. Pixels (px): Pixels are a common unit in web design. They are fixed-size units and provide a consistent measure of length. For example, `width: 100px;` sets the width of an element to 100 pixels.

2. Viewport Width (vw): `vw` is a relative unit based on the width of the viewport (the visible area of the web page). For example, `width: 50vw;` sets the width of an element to 50% of the viewport width.

3. Viewport Height (vh): `vh` is similar to `vw`, but it's based on the height of the viewport. For example, `height: 75vh;` sets the height of an element to 75% of the viewport height.

4. Root EM (rem): `rem` is a relative unit based on the font size of the root element (usually the `<html>` element). This unit is useful for maintaining consistent typography throughout your design.

5. Element EM (em): `em` is a relative unit based on the font size of the current element. It's often used for setting text sizes or spacing relative to the element's own font size.

6. Viewport Minimum (vmin): `vmin` represents the smaller of `vw` and `vh`. It can be helpful for ensuring that an element fits within the smallest dimension of the viewport.

7. Viewport Maximum (vmax): `vmax` represents the larger of `vw` and `vh`. It's useful for ensuring that an element fits within the largest dimension of the viewport.

8. Minimum Height (min-height): `min-height` specifies the minimum height an element should have, preventing it from becoming smaller than the specified value. For example, `min-height: 200px;` ensures that an element is at least 200 pixels tall.

9. Minimum Width (min-width): `min-width` specifies the minimum width an element should have, preventing it from becoming smaller than the specified value. For example, `min-width: 300px;` ensures that an element is at least 300 pixels wide.

10. Percentages (%): Percentages are a common unit for defining dimensions and positioning in CSS. They represent a proportion of the parent element's size. For example, `width: 50%;` sets the width of an element to 50% of its parent element's width.

These various units offer flexibility in designing responsive and scalable web layouts. Depending on your design goals and the context of your web page, you can choose the most appropriate unit for defining sizes and positions of elements.

---

📌 Lecture:23

- display: inline

  1.  Elements with display: inline; are rendered as inline-level elements.
  2.  They do not start on a new line, and they flow within the text content of a document. Other inline elements can appear on the same line next to them.
  3.  These elements only occupy as much horizontal space as necessary to contain their content. They cannot have a fixed width or height.
      Common examples of inline elements include `<span>`, `<a>`, `<strong>`, and `<em>`.
  4.  Inline elements are suitable for elements that should appear within a line of text, like links and emphasis.

- display: block;

  1.  Elements with display: block; are rendered as block-level elements.
      They start on a new line, creating a clear vertical separation from the content above and below them.
  2.  Block-level elements occupy the full available width of their parent container by default, unless a specific width is specified.
  3.  Common examples of block-level elements include `<div>`, `<p>`, `<h1>` to `<h6>`, and `<ul>`or `<ol>`.
  4.  Block elements are used to structure content and create distinct sections of a webpage.

- display: inline-block;

  1.  Elements with display: inline-block; are a combination of both inline and block elements.
  2.  They behave like inline elements in that they can appear on the same line as other inline elements, but they also have block-level properties, meaning you can set a fixed width, height, and apply padding or margins to them.
  3.  Inline-block elements are often used for creating layout components that need to be horizontally adjacent to each other while allowing for dimension control.
  4.  Common use cases include navigation menus, inline lists, and arranging elements side by side.

---

📌 Lecture:24

Box Shadows

- box-shadow is a popular CSS property that enables designers to add shadow effects around an element's frame. It can be used to give any element, be it a div, image, or button, a 3D feel or to emphasize on hover.

  - box-shadow: h-offset v-offset blur spread color inset;
  - h-offset and v-offset: Determines the shadow's horizontal and vertical position.
  - blur: The larger the value, the blurrier the shadow.
  - spread: Expands or shrinks the shadow size.
  - Color: Defines the shadow color.
  - inset: Makes the shadow inner.

- Example:
  `.div-element { box-shadow: 5px 5px 15px 5px #888888; }`

Text Shadows

- text-shadow is utilized to give shadows specifically to the text. It can elevate the readability of the text or give it an elegant appearance.

  - text-shadow: h-offset v-offset blur color;

- Example:
  `.text-element { text-shadow: 2px 2px 4px #888888; }`

Outlines

- An outline is a line that is drawn around elements, outside the borders, to make the element "stand out". It's commonly used for accessibility purposes, like highlighting focused elements.

  - outline: width style color;
  - width: Sets the outline width.
  - style: Determines the style of the outline such as solid, dotted, or dashed.
  - color: Sets the outline color.

- Example:
  `button-element:focus { outline: 2px solid blue; }`

Differences between Outlines and Borders:

- Position: Outlines don't take up space; they're drawn around the element, outside of any border.
- Offset: Using the outline-offset property, you can set the space between an outline and the edge or border of an element.
- Width: Borders can have varying widths on different sides, outlines have a uniform width.
- Rounded Corners: Borders can have rounded corners using border-radius, while outlines generally cannot.

---

📌 Lecture:25

CSS List Styles

Lists are a common element in web design used to prevent content from being unorganized. CSS allows you to style lists to match the design aesthetic and improve the readability of the web page.

- Unordered list styling :
  To style unordered lists, we can change the list item marker.

  - ul {
    list-style-type: value;
    }

- disc: (default) - Filled circle marker
- circle: hollow circle marker
- square: a filled square marker
- None: No marker (remove bullets)

- Ordered Lists Styling :
  For ordered lists (numbered lists), we can customize the list item numbering.
  Syntax:
  - ol {
    list-style-type: value;
    }

The value can be any of the following:

- decimal: (default) - Decimal numbers (1, 2, 3, etc.)
- decimal-leading-zero: Decimal numbers with leading zeros (01, 02, 03, etc.)
- lower-roman: lowercase Roman numbers (i, ii, iii,...)
- upper-roman: uppercase Roman numbers (I, II, III,...)
- lower-alpha: lowercase alphabetical letters (a, b, c, etc.)
- upper-alpha: uppercase alphabetical letters (A, B, C, etc.)

List-style position

The 'list-style-position' property determines where the list markers (bullets or numbers) are placed in relation to the content.

It has two values:

- inside: (default) List markers are inside the content's box. This is the default behavior.

- outside: List markers are outside the content's box, typically to the left of the content, creating a hanging indent effect.

- To remove default list styles (bullets or numbers), set the `'list-style'` property to `'none'`
  `list-style: none;`

- To set a custom list style, set the `'list-style-type'` to your new required custom style.
  `list-style-type: " 😁 "`;

---

📌 Lecture:28

CSS Positioning

The CSS positions allow you to precisely control the placement of an element on the web page. It helps to determine how elements are placed inside the container element and how they interact with the other elements on the page.

There are various types of position property values, such as:

- Static(Default)

The elements are positioned according to the normal flow of the document.

- position: static;

Relative Elements are positioned relative to the normal position in the document.

You can use the top, right, bottom, and left properties to move the element from its original position.

position: relative;

- Absolute

Elements are positioned relative to the closest positioned ancestor (parent), which means we need to have a parent element with a positioning other than 'static'.
position: absolute;

- Fixed

Elements are positioned relative to the viewport (screen) and do not move when the page is scrolled. This is useful for creating elements like fixed headers or footers.
position: fixed;

- Float

The float property is used to shift an element to the left or right within its containing element.

- Sticky

It allows an element to become "stuck" to the top or bottom of its container when scrolling, but it behaves like relative positioning within the container until it reaches a specified offset.
position: sticky;

---

📌 Lecture:30

- CSS variables

CSS variables, also known as custom properties, are a feature in Cascading Style Sheets (CSS) that allows you to define reusable values and use them throughout your CSS code. They are prefixed with a double hyphen (--) and are defined within a CSS selector, typically within the :root pseudo-class to make them available globally.

Here's how to define CSS variables: example :

```
:root {
 --main-bg-color: hashtag#3498db;
 --text-color: hashtag#fff;
}
```

You can use CSS variables in your CSS rules by referencing them with the var() function:

```
body {
 background-color: var(--main-bg-color);
 color: var(--text-color);
}
```

why CSS variables are useful:

- Reusability: You can define values once and use them multiple times, making your CSS more maintainable.

- Consistency: Centralizing values ensures that changes are consistent across your styles with updates made in one place.

- Easy Theming: You can change variable values to create different themes or designs without extensive CSS rewriting.

- Dynamic Updates: JavaScript can modify CSS variables, enabling interactive features without rewriting styles.

---

📌 Lecture:31

Media queries in CSS are used to apply different styles to a web page based on the characteristics of the device or viewport it is being viewed on. They allow you to create responsive web designs that adapt to different screen sizes and orientations, making your website more user-friendly on various devices, such as desktop computers, tablets, and smartphones.

- syntax

```
@media media-type and (media-feature) {
 /* CSS rules for this media query */
}
```

- @media: This is the starting keyword for declaring a media query.

- media-type: This is an optional part of the media query that specifies the type of media the query is for. Common values include screen, print, speech, and all. Most of the time, you'll use the screen for typical web pages.

- media-feature: This is a condition that is evaluated. It can be based on various factors like the width of the viewport, the height of the viewport, the device's orientation, and more. Media features are enclosed in parentheses.

- CSS rules for this media query: Within the curly braces, you define the CSS rules that will be applied if the media query conditions are met.

- Example :

```
@media screen and (max-width: 600px) {
 p {
 font-size: 14px;
 }
}
```

---

📌 Lecture:34

In CSS, "float" and "clear" are two properties used for controlling the layout and positioning of elements, especially in the context of floating elements within a container.

- Float:

1. The float property is used to specify that an element should be removed from the normal flow of the document and be placed to the left or right of its containing element, allowing text and other elements to wrap around it.

2. It has two possible values: left and right.

3. When you float an element, it becomes a block-level element that is shifted to the specified side, and other content flows around it.
   elements with the class float-left will be floated to the left, and elements with the class float-right will be floated to the right.

- Clear:

1. The clear property is used to control how an element should behave in relation to floated elements. It specifies whether an element should be moved below (cleared) any floating elements that precede it in the document's normal flow.

2. It has three possible values: left, right, and both, or none to allow the element to be adjacent to floated elements on either side.

3. clear: left: If an element has clear: left, it will be moved below any floated elements that are to the left of it. In other words, it won't allow floated elements on the left side of it.

4. clear: right: If an element has clear: right, it will be moved below any floated elements that are to the right of it. It won't allow floated elements on the right side of it.

5. clear: both: When an element has clear: both, it will be moved below any floated elements on either side, both left and right. This ensures that the element is displayed beneath all floated elements.

6. clear: none: This is the default value, and it allows the element to be adjacent to floated elements on either side. It doesn't force the element to move below any floated elements.

---

📌 Lecture:35

More on CSS selectors

1. `:first-child`

Pseudo-Class:

1.  Selects the first child element of its parent.

Example:

`p:first-child { /* CSS properties */ }`

2. `::first-line`

Pseudo-Element:

1.  Selects the first line of text within an element.

Example:

`p::first-line { /* CSS properties */ }`

3. Attribute Selector:

   1. Selects elements based on the presence or value of attributes in their HTML.

Examples:

`[attribute]`: Selects elements with a specific attribute.

`[attribute=value]`: Selects elements with a specific attribute and value.

4. `:nth-child` and `:nth-last-child` Pseudo-Classes:

   1. `:nth-child` selects elements based on their position within their parent.

   2. `:nth-last-child` does the same, but counts from the end of the parent.

Examples:

`p:nth-child(odd) { /* CSS properties */ }` (selects odd-numbered `<p>` elements)

`ul li:nth-last-child(2) { /* CSS properties */ }` (selects the second-to-last `<li>` element within a `<ul>`)

5. `::before` and `::after` Pseudo-Elements:

   1. Create pseudo-elements before and after the content of an element.

6. `::selection` Pseudo-Element:

Selects the portion of text that is highlighted by the user.
Example:

```css
::selection {
  background-color: yellow;
  color: black;
}
```

These selectors and pseudo-elements provide fine-grained control over styling and layout, allowing you to target specific elements, positions, and states in your HTML documents.

---

📌 Lecture:38

CSS FlexBox

In a professional context, CSS Flexbox is a powerful tool for creating flexible and responsive layouts in web design and development.

Flex Container Properties:

1. Flex Direction:
   Flex Direction determines the primary axis along which flex items are arranged within a container. It allows you to specify whether items should be displayed in a row, column, or in a reverse order.

2. Flex Wrap:
   Flex Wrap controls how flex items behave when there isn't enough space within the container. It can either allow items to wrap to the next line or stay on a single line.

3. Justify Content:
   Justify Content is used to align and distribute flex items along the main axis of the container. It allows precise control over the placement of items, ensuring a professional and consistent layout.

4. Align Items:
   Align Items defines the alignment of flex items along the cross-axis. It's essential for vertically aligning items within the container, maintaining a polished appearance.

Flex Items Properties:

1. Order:
   The Order property assigns a numerical value to flex items, determining their order within the container. This enables precise control over the visual order of items, which can be crucial for professional design.

2. Flex Grow & Shrink:
   Flex Grow and Flex Shrink properties manage how items expand or contract to fill available space. This is particularly useful when you need items to adapt dynamically to different screen sizes or content changes.

3. Align Self:
   Align Self overrides the default alignment defined by Align Items for individual flex items. It grants fine-grained control over the positioning of specific items, ensuring a professionally crafted layout.

---

📌 Lecture:39

CSS Grid

CSS Grid is a powerful layout system in CSS that allows you to create complex two-dimensional grid-based layouts for your web pages.

1. display: grid: This CSS property is used to define an element as a grid container. Once an element is set to `display: grid`, its children can be placed on the grid using various grid properties.

2. grid-template-columns and grid-template-rows: These properties allow you to define the structure of the grid by specifying the size and number of columns and rows. You can set them using values like fixed pixel sizes, percentages, or "fr" units.

3. grid-row and grid-column: These properties are used to place grid items (elements inside the grid container) within specific rows and columns of the grid. You can use line numbers or named lines to position items.

4. grid-template-areas: This property allows you to name grid areas in your grid layout. You can assign names to cells or groups of cells, making it easier to create a layout by referencing these named areas.

5. fr unit: The "fr" unit stands for "fractional unit" and is used in grid layouts to distribute available space proportionally. For example, if you have two columns with widths of 1fr each, they will share the available space equally. You can use "fr" units to create flexible and responsive layouts.

6. gap: The `gap` property sets the spacing between grid items, both horizontally (column gap) and vertically (row gap). It's a convenient way to add space between grid items without the need for margins or padding.

---

📌 Lecture:42

In CSS, the `transform` property is used to apply various transformations to HTML elements. These transformations allow you to modify an element's position, size, and rotation. The `transform` property is particularly useful for creating animations and altering the appearance of elements on a webpage. Here are some common transformations you can apply with the `transform` property:

1. Translate: Move an element horizontally and/or vertically from its original position.

transform: translate(50px, 20px);

2. Scale: Increase or decrease the size of an element.

transform: scale(1.5);

3. Rotate: Rotate an element by a specified angle in degrees.

transform: rotate(45deg);

4. Skew: Skew an element along the X and Y axes.

transform: skew(10deg, 20deg);

5. Multiple Transformations: You can combine multiple transformations by separating them with spaces.
   transform: translate(50px, 20px) rotate(45deg) scale(1.5);

---

📌 Lecture:45

CSS transitions allow you to smoothly change property values over a specified duration. Transitions can be applied to a wide range of CSS properties, such as color, size, position, and more.

1. transition-property: Specifies the CSS property or properties that should transition. You can specify multiple properties separated by commas. If you use the value `all`, it means all properties will transition.

Example:

```
.element {
 transition-property: width, height, background-color;
 }
```

2. transition-duration: Specifies the duration of the transition. It's expressed in seconds (s) or milliseconds (ms).

Example:

```
 .element {
 transition-duration: 0.5s;
 }
```

3. transition-timing-function: Specifies the timing function for the transition, determining the acceleration and deceleration of the transition. Common values include `ease`, `linear`, `ease-in`, `ease-out`, and `ease-in-out`.

Example:

```
 .element {
 transition-timing-function: ease-in-out;
 }
```

4. transition-delay: Specifies the delay before the transition starts. It's expressed in seconds (s) or milliseconds (ms).

Example:

```
 .element {
 transition-delay: 0.2s;
 }
```

Combining these properties using the `transition` shorthand:

```
.element {
 transition: property duration timing-function delay;
}
```

`property` represents the CSS property to transition, `duration` is the transition duration, `timing-function` is the timing function, and `delay` is the delay before the transition starts.

---

📌 Lecture:46

CSS animations allow you to create smooth and visually appealing transitions and movements on web pages.

1. animation-name:
   Specifies the name of the @keyframes rule defining the animation's behavior.

```
.element {
animation-name: slide-in;
}
```

```
@keyframes slide-in {
from {
transform: translateX(-100%);
}
to {
transform: translateX(0);
}
}
```

2. animation-duration: Specifies the duration of the animation in seconds or milliseconds.

```
 .element {
 animation-duration: 2s;
 }
```

3. animation-iteration-count: Defines the number of times the animation should repeat. Use `infinite` for continuous repetition.

```
 .element {
 animation-iteration-count: 3;
 }
```

4. animation-timing-function: Sets the timing function to control the speed of the animation. Common values include `ease`, `linear`, `ease-in`, `ease-out`, and `ease-in-out`.

```
 .element {
 animation-timing-function: ease-in-out;
 }
```

5. animation-delay: Specifies the delay before the animation starts. It can be in seconds or milliseconds.

```
 .element {
 animation-delay: 1s;
 }
```

6. animation-direction: Defines whether the animation should play in reverse (`reverse`), alternate between forward and backward (`alternate`), or both (`alternate-reverse`).

```
 .element {
 animation-direction: alternate;
 }
```

7. animation-play-state:Controls whether the animation is running or paused. Use `running` or `paused`.

```
 .element {
 animation-play-state: paused;
 }
```

8. animation-fill-mode: Specifies how the element should be styled before and after the animation. Options include `none`, `forwards`, `backward`, and `both`.

```
 .element {
 animation-fill-mode: forwards;
 }
```

---

📌 Lecture:49

1. object-fit:

The object-fit property is used to specify how an `<img>`, `<video>`, or `<object>` element should behave regarding its dimensions and the dimensions of its container.

- Values:

1.  cover: The content is resized to cover the entire container while maintaining its aspect ratio. This may result in some parts of the content being cropped if the aspect ratios don't match.

2.  contain: The content is resized to fit within the container while maintaining its aspect ratio. This may result in empty space within the container if the aspect ratios don't match.

3.  fill: The content is stretched or compressed to fill the entire container, potentially distorting its aspect ratio.

4.  object-position:

The object-position property defines the initial position of the content inside its container. It is often used in conjunction with object-fit.

Example:

```
 img {
 object-position: 10px 20px; or top right, center, etc.
 }
```

3. background-repeat :

The background-repeat property controls how a background image is repeated both horizontally and vertically within its container.

- Values:

1.  repeat: The background image is tiled both horizontally and vertically.

2.  repeat-x: The background image is tiled only horizontally.

3.  repeat-y: The background image is tiled only vertically.

4.  no-repeat: The background image is not repeated; it appears only once.

5.  background-position:

The background-position property sets the initial position of a background image within its container.

```
body {
background-image: url('background.jpg');
background-position: center top; or other values.
}
```

These properties are useful for controlling the layout and presentation of images and background images in a flexible and responsive way, allowing developers to create visually appealing designs.

---

📌 Lecture:50

CSS filters are a set of properties in Cascading Style Sheets (CSS) that allow you to apply visual effects to HTML elements. These filters can be used to alter the appearance of an element, such as changing its color, blurring it, adjusting its brightness, and more. Here are some common CSS filter properties:

1. blur():

Applies a blur effect to the element. The higher the value, the more blurry the element becomes.

```
.element {
filter: blur(5px);
}
```

2. brightness():

Adjusts the brightness of the element. A value greater than 1 increases brightness, while a value less than 1 decreases it.

```
.element {
filter: brightness(150%);
}
```

3. contrast():

Adjusts the contrast of the element. A value greater than 1 increases contrast, while a value less than 1 decreases it.

```
.element {
filter: contrast(200%);
}
```

4. grayscale():

Converts the element to grayscale. A value of 1 means complete grayscale, while 0 means no grayscale.

```
.element {
filter: grayscale(50%);
}
```

5. hue-rotate():

Rotates the colors of the element. The value is in degrees.

```
.element {
filter: hue-rotate(90deg);
}
```

6. invert():

Inverts the colors of the element. A value of 1 means complete inversion, while 0 means no inversion.

```
.element {
filter: invert(75%);
}
```

7. opacity():

Adjusts the opacity of the element. A value of 1 means fully opaque, while 0 means fully transparent.

```
.element {
filter: opacity(80%);
}
```

8. saturate():

Adjusts the saturation of the element. A value greater than 1 increases saturation, while a value less than 1 decreases it.

```
.element {
filter: saturate(150%);
}
```

9. sepia():

Applies a sepia tone to the element. A value of 1 means full sepia, while 0 means no sepia.

```
.element {
filter: sepia(70%);
}
```

You can combine multiple filters by separating them with spaces.

For example:

```
.element {
 filter: grayscale(50%) blur(3px) contrast(150%);
}
```

---

📌 Lecture:54

- Introduction to Javascript and Node.js Installation.

JavaScript (JS) is a versatile programming language primarily used for web development. It runs in web browsers for client-side scripting, providing interactivity and dynamic content. With the advent of Node.js, JavaScript is also employed for server-side development, allowing a unified language for both front-end and back-end tasks. Node.js is a JavaScript runtime facilitating server-side execution.

Uses of JavaScript include:

1. Client-Side Scripting: Dynamic web page content, interactivity, and asynchronous operations.

2. Server-Side Development:Node.js enables scalable server applications and APIs.

3. Cross-Platform Development: JavaScript is used for mobile app development (e.g., React Native) and desktop apps (e.g., Electron).

4. Automation: Scripting tasks on both the client and server sides.

---

📌 Lecture:55

1. ECMAScript (ES):

   1. ECMAScript is the standard upon which JavaScript is based. It defines the core features of the language.

   2. Different versions of ECMAScript introduce new features and improvements to the language.

2. Variables:

   1. Variables are used to store and manipulate data in a program.

   2. In JavaScript, you declare variables using the `var`, `let`, or `const` keywords.

3. Rules for Variable Names:

   1. Variable names are case-sensitive.
   2. Names must begin with a letter, underscore (\_), or dollar sign ($).
   3. Subsequent characters can also be digits (0-9).
   4. Reserved words (e.g., `if`, `else`, `while`) cannot be used as variable names.

4. `var`, `let`, and `const`:

   1. `var` was traditionally used for variable declaration but has some scope issues and is less preferred nowadays.
   2. `let` and `const` were introduced in ECMAScript 6 (ES6) and have block-level scope.
   3. `let` allows you to reassign values, while `const` is used for constants and cannot be reassigned.

5. typeof:

   1. The `typeof` operator is used to determine the data type of a variable.
   2. Example: `typeof variableName`

6. Primitive Data Types:

   1. JavaScript has six primitive data types: `undefined`, `null`, `boolean`, `number`, `string`, and `symbol`.
   2. These types are immutable (cannot be changed) and are passed by value.

7. Objects:
   1. Objects are complex data types that allow you to store key-value pairs.
   2. Objects can be created using curly braces `{}` and properties are accessed using dot notation or bracket notation.

- Example:

```
let person = {
name: "John",
age: 30,
isStudent: false
};

console.log(person.name); // Output: John
```

---

📌 Lecture:56

1. Arithmetic Operators:

Arithmetic operators perform mathematical operations on numeric values.

- Addition (+)
- Subtraction (-)
- Multiplication (\*)
- Division (/):
- Modulus (%):

2. Assignment Operators:

Assignment operators assign values to variables.

- Assignment (=)
- Addition Assignment (+=)
- Subtraction Assignment (-=)

3. Comparison Operators:

Comparison operators compare values and return a boolean result.

- Equal (==)
- Not Equal (!=)
- Strict Equal (===)
- Strict Not Equal (!==)
- Greater Than (>)
- Less Than (<)

4. Logical Operators:

Logical operators perform logical operations and return a boolean result.

- AND (&&):
- OR (||):
- NOT (!):

If, Else If, Else Statements:

Conditional statements are used to make decisions based on conditions.

```
var number = 10;
if (number > 0) {
 console.log('Number is positive');
} else if (number < 0) {
 console.log('Number is negative');
} else {
 console.log('Number is zero');
}
```

Ternary Operator:

The ternary operator provides a concise way to write a simple if-else statement.

```
var result = (condition) ? 'Value if true' : 'Value if false';
var age = 20;
var status = (age >= 18) ? 'Adult' : 'Minor';
```

---

📌 Lecture 57

Loops in Javascript

1. Standard "for" loop:

```
 for (initialization; condition; increment/decrement) {
 code to be executed
 }
```

Example:

```
 for (let i = 0; i < 5; i++) {
 console.log(i);
 }
```

---

2. "for...in" loop:

Used to iterate over the enumerable properties of an object.

```
for (variable in object) {
code to be executed
}
```

Example:

```
 const obj = { a: 1, b: 2, c: 3 };
 for (let key in obj) {
 console.log(key, obj[key]);
 }
```

---

3. "for...of" loop:

Introduced in ECMAScript 2015, it iterates over iterable objects (e.g., arrays, strings).

```
for (variable of iterable) {
code to be executed
}
```

Example:

```
const arr = [1, 2, 3, 4, 5];
for (let element of arr) {
console.log(element);
}
```

---

4. "forEach" method:

Available for arrays, it executes a provided function once for each array element.

```
array.forEach(function (currentValue, index, array) {
code to be executed
});
```

Example:

```
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (element) {
console.log(element);
});
```

---

5. "while" loop:

Executes a block of code while a specified condition is true.

```
while (condition) {
code to be executed
}
```

Example:

```
let i = 0;
while (i < 5) {
console.log(i);
i++;
}
```

---

6. "do...while" loop:

Similar to the "while" loop, but the condition is evaluated after executing the code block.

```
do {
code to be executed
} while (condition);
```

Example:

```
let i = 0;
do {
console.log(i);
i++;
} while (i < 5);
```

---

📌 Lecture 58

Function in Javascript

In JavaScript, a function is a block of reusable code designed to perform a specific task. Functions are a fundamental building block of JavaScript programs, and they allow you to organize your code, make it more modular, and avoid repetition.

Function declaration

Example-1

```
function greet(name) {
 return "Hello, " + name + "!";
}

// Function call
var greeting = greet("John");
console.log(greeting); Output: Hello, John!
```

- functionName is the name of the function.
- parameters are the values that the function accepts as inputs.

In the example, the name is a parameter.

- The function body is enclosed in curly braces `{}` and contains the code to be executed when the function is called.

- The return statement is optional and is used to specify the value that the function will return. If a function doesn't have a return statement, it returns undefined by default.

You can also create functions using function expressions:

Example-2

```
var add = function(a, b) {
 return a + b;
};

// Function call

var sum = add(3, 4);
console.log(sum); Output: 7
```

In this example, add is a function expression assigned to the variable add.

Arrow functions are a more concise way to write functions, introduced in ECMAScript 6 (ES6):

```
// Arrow function
var multiply = (a, b) => a * b;

// Function call
var product = multiply(2, 5);
console.log(product); Output: 10
```

---

📌 Lecture 60

In JavaScript, strings are used to represent textual data. They can be created using either single quotes (`'`) or double quotes (`"`). Additionally, JavaScript introduced template literals (also known as template strings) with ES6, which use backticks (``).

1. Creating Strings:

- Using single quotes: `let singleQuotedString = 'Hello, World!';`
- Using double quotes: `let doubleQuotedString = "Hello, World!";`
- Using template literals: `` let templateString = `Hello, World!`; ``

2. Escape Sequences:

Escape sequences are special characters in a string that are preceded by a backslash (`\`). Some common escape sequences include:

- `\'`: Single quote
- `\"`: Double quote
- `\\`: Backslash
- `\n`: Newline
- `\t`: Tab

Example:

let escapedString = 'This is a single quote (\') and a newline (\n) example.';

3. String Characteristics:

Strings are immutable, meaning their values cannot be changed after they are created.

Strings in JavaScript are zero-indexed, meaning the first character is at index 0, the second at index 1, and so on.

4. String Methods:

JavaScript provides numerous methods for working with strings. Some common ones include:

1.  length: Returns the length of a string.
    let str = 'Hello, World!';
    console.log(str.length); Output: 13

2.  charAt(index): Returns the character at the specified index.
    let str = 'Hello, World!';
    console.log(str.charAt(0)); Output: H

3.  substring(start, end): Returns a substring between the specified indices.

```
 let str = 'Hello, World!';
 console.log(str.substring(0, 5)); Output: Hello
```

4. indexOf(searchString): Returns the index of the first occurrence of a specified value.

```
let str = 'Hello, World!';
console.log(str.indexOf('World')); Output: 7
```

5.  replace(oldValue, newValue): Replaces a specified value with another value in a string.

```
 let str = 'Hello, World!';
 console.log(str.replace('World', 'Universe'));
 Output: Hello, Universe!

```

6. `toUpperCase()`, `toLowerCase()`: Converts a string to uppercase or lowercase, respectively.

```
let str = 'Hello, World!';
console.log(str.toUpperCase());
Output: HELLO, WORLD!
```

7. `trim()`: Removes whitespace from both ends of a string.
   let str = ' Hello, World! ';
   console.log(str.trim());
   Output: Hello, World!

8. concat(str2): Concatenates two or more strings.

```
let str1 = 'Hello, ';
let str2 = 'World!';
console.log(str1.concat(str2));
Output: Hello, World!
```

---

📌 Lecture 63

In JavaScript, arrays are a type of object used to store and organize multiple values. They are commonly used for holding lists of items, and you can perform various operations on arrays using array methods. Additionally, looping through arrays is a common practice to access and manipulate array elements.

1. Creating Arrays:

   1. Method 1: Using square brackets

```
let fruits = ['apple', 'orange', 'banana'];
```

2. Method 2: Using the Array constructor

```
let numbers = new Array(1, 2, 3, 4, 5);
```

3.  Method 3: Creating an empty array and adding elements later

```
let colors = [];
colors.push('red', 'green', 'blue');
```

2. Accessing Array Elements:

Array elements are accessed using zero-based indexing:

```
console.log(fruits[0]); Output: 'apple'
console.log(numbers[2]); Output: 3
console.log(colors.length); Output: 3 (length of the array)
```

3. Common Array Methods:

   1. push() and pop():

   fruits.push('grape'); Adds 'grape' to the end of the array

   ```
   let lastFruit = fruits.pop(); Removes and returns the last element ('grape' in this case)
   ```

   2. unshift() and shift():

   ```
   fruits.unshift('kiwi'); Adds 'kiwi' to the beginning of the array

   let firstFruit = fruits.shift(); Removes and returns the first element ('kiwi' in this case)
   ```

   3. splice():

   Removes elements starting from index 1 and removes 2 elements

   ```
   fruits.splice(1, 2);
   Inserts 'pear' and 'peach' starting at index 1
   fruits.splice(1, 0, 'pear', 'peach');
   ```

   4. concat():

   ```
   let moreFruits = ['pineapple', 'mango'];
   let allFruits = fruits.concat(moreFruits); Concatenates two arrays
   ```

1. Looping Through Arrays:

   1. for loop:

   ```
   for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
   }
   ```

   2. forEach method:

   ```
   fruits.forEach(function (fruit) {
   console.log(fruit);
   });
   ```

   3. for...of loop:

   ```
   for (let fruit of fruits) {
   console.log(fruit);
   }
   ```

   4. `map` method:

   ```
   let capitalizedFruits = fruits.map(function (fruit) {
   return fruit.toUpperCase();
   });
   console.log(capitalizedFruits);
   ```

---

📌 Lecture 66

1. Document Object Model (DOM):

   1. The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text.

   2. JavaScript can be used to manipulate the DOM dynamically, allowing you to update, delete, or add elements to a web page on the fly.

2. Browser Object Model (BOM):

   1. The BOM represents the browser as an object, providing additional objects and methods beyond the DOM that allow interaction with the browser itself (e.g., managing the browser window, handling navigation, and interacting with the user).

   2. The BOM is not standardized, and its features can vary between different browsers.

---

📌 Lecture 67

Working with the DOM involves interacting with different types of nodes, each representing different elements, attributes, and text content in an HTML or XML document.

Types of Nodes:

1. Element Nodes:

   1. Represent HTML or XML elements.

   2. Accessed using methods like getElementById, getElementsByTagName, or querySelector.

2. Text Nodes:

   1. Contain text content within an element.

   2. Accessed using the nodeValue property.

   ```
   Example:
   var textNode = elementNode.firstChild; console.log('Text Content:', textNode.nodeValue);
   ```

3. Comment Nodes:

   1. Represent comments within the document.

   2. Accessed similarly to other nodes.

   ```
   Example:
   var commentNode = document.createComment('This is a comment.');
   ```

Working with the DOM

1. childNodes:

   1. element.childNodes returns a NodeList of all child nodes of the specified element.

   Example:

   ```
   var parent = document.getElementById('parentElement');
   var childNodes = parent.childNodes;
   ```

2. children:

   1. element.children returns an HTMLCollection of all the child elements of the specified element.

   Example:

   ```
   var parent = document.getElementById('parentElement');
   var children = parent.children;
   ```

3. firstChild:

   1. element.firstChild returns the first child node of the specified element.

   Example:

   ```
   var parent = document.getElementById('parentElement');
   var firstChild = parent.firstChild;
   ```

4. lastChild:

   1. element.lastChild returns the last child node of the specified element.

   Example:

   ```
   var parent = document.getElementById('parentElement');
   var lastChild = parent.lastChild;
   ```

5. parentNode:

   1. element.parentNode returns the parent node of the specified element.

   Example:

   ```
   var child = document.getElementById('childElement');
   var parent = child.parentNode;
   ```

6. nextSibling and previousSibling:

   1. element.nextSibling returns the next sibling node of the specified element.

   2. element.previousSibling returns the previous sibling node of the specified element.

   Example:

   ```
   var sibling = document.getElementById('siblingElement');
   var nextSibling = sibling.nextSibling;
   var prevSibling = sibling.previousSibling;
   ```

7. firstElementChild and lastElementChild:

   1. element.firstElementChild returns the first child element of the specified element.

   2. element.lastElementChild returns the last child element of the specified element.

   Example:

   ```
   var parent = document.getElementById('parentElement');
   var firstElement = parent.firstElementChild;
   var lastElement = parent.lastElementChild;
   ```

8. firstElementChild.childNodes:

   1. element.firstElementChild.childNodes returns a NodeList of child nodes of the first child element of the specified element.

   Example:

   ```
   var parent = document.getElementById('parentElement');
   var childNodes = parent.firstElementChild.childNodes;
   ```

---

📌 Lecture 68

Searching for elements in the Document Object Model (DOM) using various methods in JavaScript.

1. getElementById:

   1. Example: document.getElementById("myElementId");

   2. Returns the element with the specified ID.

2. querySelector:

   1. Example: document.querySelector(".myClass");

   2. Returns the first element that matches the specified CSS selector.

3. querySelectorAll:

   1. Example: document.querySelectorAll("p.myClass");

   2. Returns a NodeList containing all elements that match the specified CSS selector.

4. getElementsByTagname:

   1. Example: document.getElementsByTagName("div");

   2. Returns a live HTMLCollection of elements with the given tag name.

5. getElementsByClassName:

   1. Example: document.getElementsByClassName("myClass");

   2. Returns a live HTMLCollection of elements with the given class name.

6. getElementsByName:

   1. Example: document.getElementsByName("myName");

   2. Returns a NodeList of elements with the given name attribute.

7. matches:

   1. Example: element.matches(".myClass");

   2. Returns `true` if the element matches the specified CSS selector.

8. closest:

   1. Example: element.closest(".myAncestor");

   2. Returns the closest ancestor of the current element that matches the specified selector.

9. contains:

   1. Example: element.contains(childElement);

   2. Returns `true` if the specified element is a descendant of the current element.

---

📌 Lecture 71

DOM Properties

1. innerHTML:

   1. Property that represents the HTML content inside an element.

   2. Example: element.innerHTML = "New content";

2. outerHTML:

   1. Property that represents the HTML content of an element, including the element itself.

   2. Example: element.outerHTML = `<div>New content</div>;`

3. textContent:

   1. Property that represents the text content inside an element, without HTML.

   2. Example: element.textContent = "Text content";

4. hidden property:

   1. Property that can be used to hide or show an element.

   2. Example: element.hidden = true;

5. Attribute method:

   1. Generally refers to methods for manipulating HTML element attributes.

   2. Example: element.setAttribute("attributeName", "attributeValue");

6. Data Attribute:

   1. Custom attributes prefixed with "data-" that can be used to store extra information.

   2. Example: `<div data-info="some data">Content</div>`

7. Insertion Method:

   1. Methods for adding content to the DOM.

   2. Example: parentElement.appendChild(newChild);

8. insertAdjacentHTML/Text/Element:

   1. Methods for inserting HTML, text, or elements into a specified position relative to the current element.

   2. Example: `element.insertAdjacentHTML('beforebegin', '<p>New content</p>');`

9. Node Removal:

   1. Methods for removing nodes (elements) from the DOM.

   2. Example: parentElement.removeChild(childElement);

---

📌 Lecture 74

1. Events in JavaScript:

Events are actions or occurrences that happen in the browser, triggered by the user or the browser itself. Examples of events include clicks, mouse movements, keypresses, and page loading. In JavaScript, you can respond to these events by defining event handlers.

Example:

1.  Click Event:

```
document.getElementById('myButton').addEventListener('click', () => alert('Button clicked!'));
```

2.  Mouse Over Event:

```
document.getElementById('myDiv').addEventListener('mouseover', () => {
document.getElementById('myDiv').style.backgroundColor = 'lightgreen';
});
```

3.  Key Down Event:

```
document.getElementById('myInput').addEventListener('keydown', event => console.log('Key pressed:', event.key));
```

4.  Key Up Event:

```
document.getElementById('myInput').addEventListener('keyup', event => console.log('Key released:', event.key));
```

2. Event Bubbling:

Event bubbling is a mechanism in which an event starts from the target element that triggered it and then bubbles up through the DOM hierarchy. During this process, each ancestor element of the target can also respond to the same event.

Example:

```
<div id="parent">
 <button id="child">Click me</button>
</div>

<script>
 document.getElementById('parent').addEventListener('click', function() {
 alert('Parent div clicked!');
 });
 document.getElementById('child').addEventListener('click', function(event) {
 event.stopPropagation(); // Prevents the event from bubbling up
 alert('Child button clicked!');
 });
</script>
```

In this example, if you click the button, both "Child button clicked!" and "Parent div clicked!" alerts would normally appear due to event bubbling. However, event.stopPropagation() prevents the event from further propagation, so only the "Child button clicked!" alert will be displayed.

3. setTimeout in JavaScript:

   `setTimeout` is a function in JavaScript that allows you to execute a function or a piece of code after a specified delay (in milliseconds).

   Example:

   ```
   console.log('Start');
   setTimeout(function() {
   console.log('After 2000 milliseconds');
   }, 2000);
   console.log('End');
   ```

   In this example, "Start" will be logged first, then "End," and finally, "After 2000 milliseconds" will be logged after a 2000 (2 seconds) delay.

---

📌 Lecture 75

Asynchronous behavior in JavaScript allows certain tasks to be executed independently, without blocking the main program flow. It's achieved through mechanisms like callback functions, promises, and async/awaits. This enables handling time-consuming operations, such as network requests or user interactions, without freezing the application. Asynchronous code improves responsiveness by letting the program continue its execution while waiting for tasks to be completed.

1. Callback Functions:

Callback functions are a way to handle asynchronous operations by passing a function as an argument to another function. The passed function is executed once the asynchronous task is completed. Callbacks help in managing control flow in non-blocking operations.

Example :

```
function fetchData(callback) {
 setTimeout(() => {
 const data = "Async data";
 callback(data);
 }, 1000);
}
function handleData(data) {
 console.log("Data:", data);
}
fetchData(handleData);
```

2. Promises:

Promises are a more structured approach to handling asynchronous operations. A Promise represents the eventual completion or failure of an asynchronous task. It has three states: pending, resolved (fulfilled), and rejected. Promises provide a cleaner syntax compared to callbacks, making it easier to reason about asynchronous code.

Example :

```
function fetchData() {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 const data = "Async data";
 resolve(data);
 // or reject("Error occurred");
 }, 1000);
 });
}
fetchData()
 .then(data => console.log("Data:", data))
 .catch(error => console.error("Error:", error));
```

3. Promise Chaining:

Promise chaining is a technique that allows you to chain multiple asynchronous operations together. Each .then() in the chain returns a new Promise, enabling sequential execution of tasks. This approach helps avoid callback hell or the pyramid of doom and improves code readability.

4. Promise API:

The Promise API provides additional methods to enhance Promise-based workflows:

1.  Promise.all: Takes an array of Promises and returns a new Promise that resolves when all the input Promises have resolved. It rejects if any of the Promises reject.

2.  Promise.race: Takes an array of Promises and returns a new Promise that resolves or rejects as soon as one of the input Promises resolves or rejects. It can be useful for handling scenarios where the first result matters.

---

📌 Lecture 76

Async/Await

async/await is a feature in JavaScript that simplifies working with asynchronous code. It provides a more synchronous-looking syntax for dealing with Promises, making the code cleaner and easier to understand.

1. async Function Declaration:

The `async` keyword is used to declare a function as asynchronous. An async function always returns a Promise, and it allows the use of the `await` keyword inside it.

Example :

```
 async function myAsyncFunction() {
 // Code here
}
```

2. await Keyword:

The `await` keyword is used inside an async function to pause the execution of the function until the Promise is resolved. It can only be used inside an async function.

Example:

```
async function fetchData() {
const response = await fetch('https://lnkd.in/d-uh4-if');
const data = await response.json();
console.log(data);
}
fetchData();
```

In the example above, await fetch('https://lnkd.in/d-uh4-if') waits for the `fetch` Promise to resolve before moving on to the next line. Similarly, `await response.json()` waits for the JSON parsing Promise to resolve.

`async/await` is particularly useful when dealing with multiple asynchronous operations, as it makes the code more readable and avoids the "callback hell" problem associated with nested callbacks. It's important to note that async functions always return a Promise, and the value they return is wrapped in a resolved Promise.

3. Fetch API

The Fetch API in JavaScript simplifies making HTTP requests. It supports various HTTP methods, headers, query parameters, and file uploads. The response can be handled in different formats, such as JSON or FormData.

Additional Features:

1.  Headers: Customize request headers using the Headers interface.

2.  HTTP Methods: Support for various HTTP methods like GET, POST, PUT, etc.

3.  Query Parameters: Easily include query parameters in the URL.

4.  FormData: Simplify form data handling, especially for file uploads.

5.  Handling Cookies: Control cookie behavior with the credentials option.

6.  AbortController: Abort a fetch request using the AbortController interface.

Use Cases:

1.  Fetching JSON Data: Parse JSON responses using response.json().

2.  Uploading Files: Use FormData for straightforward file uploads.

3.  Handling Cookies: Specify credentials: 'include' to include cookies.

4.  AbortController: Abort fetch requests using the AbortController for timeout scenarios.

---

📌 Lecture 79

Error handling in JavaScript involves techniques and mechanisms to gracefully handle unexpected situations or errors that may occur during the execution of your code. Here are some common approaches to error handling in JavaScript:

1. Try...Catch Statement:

The `try...catch` statement allows you to catch and handle exceptions within a specific block of code.

Example :

```
 try {
 // Code that might throw an exception
 } catch (error) {
 // Code to handle the exception
 }
```

2. Throwing Custom Errors:

You can throw custom errors using the `throw` statement. This is useful for signaling specific issues in your code.

Example:

```
 try {
 if (someCondition) {
 throw new Error('Custom error message');
 }
 } catch (error) {
 // Code to handle the custom error
 }
```

3. Error Object:

The `Error` object in JavaScript provides information about an error. It has properties like `name` and `message` that you can use to identify and handle errors more effectively.

Example:

```
 try {
 // Code that might throw an exception
 } catch (error) {
 console.error('Error name:', error.name);
 console.error('Error message:', error.message);
 }
```

4. Debugging with `console.error`:

During development, logging errors to the console using `console.error` can be helpful for debugging purposes.

Example:

```
 try {
 // Code that might throw an exception
 } catch (error) {
 console.error('An error occurred:', error);
 }
```

---

📌 Lecture 80

Object-oriented programming in JavaScript

1. Prototype and Setting Prototype:

In JavaScript, every object has a prototype, and prototypes are used for inheritance. A prototype is an object from which other objects inherit properties. You can set the prototype of an object using `Object.create()`.

Example:

```
// Prototype
var personPrototype = {
 getFullName: function () {
 return this.firstName + " " + this.lastName;
 },
};

// Setting Prototype
var person = Object.create(personPrototype);
person.firstName = "John";
person.lastName = "Doe";
console.log(person.getFullName()); // Output: John Doe
```

2. Constructor Function:

Constructor functions are used to create objects with a common set of properties and methods. The new keyword is used to instantiate objects from a constructor function.

3. ES6 Class and Object:

ES6 introduced a class syntax that simplifies object-oriented programming in JavaScript. Classes provide a cleaner and more familiar way to create objects.

Example:

```
class Person {
 constructor(firstName, lastName) {
 this.firstName = firstName;
 this.lastName = lastName;
 }
 getFullName() {
 return this.firstName + " " + this.lastName;
 }
}
var person = new Person("John", "Doe");
console.log(person.getFullName()); // Output: John Doe
```

4. Class Inheritance and the extends Keyword:

Class inheritance allows a class to inherit properties and methods from another class. The extends keyword is used to create a subclass that inherits from a superclass.

5. Method Overriding and the super Keyword:
   Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass. The super keyword is used to call the method from the superclass.

Example:

```
class Employee extends Person {
 constructor(firstName, lastName, employeeId) {
 super(firstName, lastName);
 this.employeeId = employeeId;
 }
 getFullName() {
 return super.getFullName() + " (Employee)";
 }
}
var employee = new Employee("Jane", "Smith", "E12345");
console.log(employee.getFullName()); // Output: Jane Smith (Employee)
```

6. Static Method:

Static methods belong to the class itself, not instances of the class. They are called on the class rather than on instances.

7. Getter and Setter:

Getter and setter methods control access to object properties. They are used to retrieve and set the values of private properties.

Example:

```
class Circle {
 constructor(radius) {
 this._radius = radius; // convention to indicate it's a private property
 }
 get radius() {
 return this._radius;
 }
 set radius(newRadius) {
 this._radius = newRadius > 0 ? newRadius : 0;
 }
}
var myCircle = new Circle(5);
myCircle.radius = 10;
console.log(myCircle.radius); // Output: 10
```

8. instanceof Operator:

The instanceof operator is used to check whether an object is an instance of a particular class or constructor.

---

📌 Lecture 82

Advanced Javascript:

1. IIFE (Immediately Invoked Function Expression):

An IIFE is a JavaScript function that is immediately executed after it's defined. It helps create a private scope for variables and functions to avoid polluting the global scope.

Example:

```
(function() {
 // Code within this function is executed immediately
 var x = 10;
 console.log(x); // Output: 10
})();

// x is not accessible here
```

The function is wrapped in parentheses to ensure it's treated as an expression, and then it's immediately invoked with `()`.

2. Destructuring:

Destructuring is a way to extract values from arrays or objects into variables. It's a concise syntax that can make your code cleaner. Here are examples for arrays and objects:

1.  Array Destructuring:

```
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1 2 3
```

2.  Object Destructuring:

```
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30
```

3. Spread Syntax:

The spread syntax (`...`) is used to expand elements (for arrays) or properties (for objects). It's often used for making shallow copies or combining arrays/objects.

1.  Array Spread:

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

2.  Object Spread:

```
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

4. Hoisting:

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations.

Example:

```
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

In the first `console.log`, `x` is declared but not yet assigned, so it's `undefined`. Hoisting can sometimes lead to unexpected behavior, so it's good practice to declare and initialize variables at the beginning of their scope. Note that `let` and `const` declarations are also hoisted but don't have an initial value until the actual declaration statement.

---

📌 Lecture 85

Backend, Node.js & npm

1. Backend:

The backend refers to the server side of a web application. It's responsible for handling tasks such as processing data, managing databases, and performing business logic. The backend interacts with the front end (client-side) and often communicates with a database to retrieve or store information.

Key Responsibilities:

1.  Process user requests and handle business logic.

2.  Connect to databases to store and retrieve data.

3.  Perform authentication and authorization.

4.  Respond to frontend requests with appropriate data.

Technologies: Backend development can be done using various technologies, including server-side languages like Node.js, Python (Django, Flask), Ruby (Ruby on Rails), Java (Spring), PHP (Laravel), and more.

2.  Node.js:

Node.js is a JavaScript runtime built on the V8 JavaScript engine. It allows you to run JavaScript on the server side, enabling the development of scalable and high-performance web applications. Node.js is event-driven and non-blocking, making it suitable for handling concurrent connections.

Key Features:

1.  Single-threaded, event-driven architecture.

2.  Non-blocking I/O operations for efficient handling of many connections.

3.  Large ecosystem of npm packages (libraries) for building applications.

4.  Suitable for building real-time applications, APIs, and microservices.

Use Cases:Node.js is commonly used for building web servers, RESTful APIs, chat applications, and other networked software.

3.  npm (Node Package Manager):

npm is the default package manager for Node.js. It is used to install, manage, and share reusable code packages or modules (written in JavaScript) for building Node.js applications.

Key Features

1.  Manages project dependencies and versions.

2.  Provides a command-line interface for installing, updating, and removing packages.

3.  Facilitates the sharing of code among developers by using a centralized registry.

4.  Allows developers to publish and distribute their packages.
    Usage: Developers use npm to install third-party libraries and tools necessary for their Node.js projects. The `package.json` file in a project contains information about project dependencies, scripts, and other metadata.

In summary, the backend is the server-side of a web application responsible for handling server-side logic. Node.js is a JavaScript runtime that allows developers to use JavaScript on the server side, and npm is the package manager used with Node.js to manage project dependencies and streamline the development process by providing access to a vast ecosystem of reusable code modules. Together, they enable the creation of scalable and efficient backend applications.

---

📌 Lecture 86

CommonJs Vs EcmaScript Modules

CommonJS (used in environments like Node.js) and ECMAScript Modules (ESM) are two different module systems in JavaScript, each with its own syntax and behavior. One of the key differences between them is how they handle exports.

1. CommonJS:

CommonJS is a module system designed for server-side JavaScript, particularly in Node.js. In CommonJS, you use the module.exports object to export values from a module, and require is used to import those values in other modules.

Example:

```
// ModuleA.js
const value = 42;
module.exports = value;

// ModuleB.js
const importedValue = require('./ModuleA');
console.log(importedValue); // 42
```

2. ECMAScript Modules (ESM):

ECMAScript Modules are the standardized module system introduced in ECMAScript 6 (ES6). In ESM, you use `export` to export values and `import` to bring them into other modules.

Example:

```
// ModuleA.js
const value = 42;
export default value;

// ModuleB.js
import importedValue from './ModuleA.js';
console.log(importedValue); // 42
```

1. Named Export and Default Export:

   1. Named Export:

In both CommonJS and ESM, you can export multiple values from a module using named exports. Named exports allow you to export several values and import them by name in other modules.

=> CommonJS Example:

```
// CommonJS
// ModuleA.js

const value1 = 42;
const value2 = 'hello';

exports.value1 = value1;
exports.value2 = value2;

// CommonJS
// ModuleB.js

const { value1, value2 } = require('./ModuleA');
console.log(value1, value2); // 42 hello
```

=> ESM Example:

```
// ESM
// ModuleA.mjs
export const value1 = 42;
export const value2 = 'hello';

// ESM
// ModuleB.mjs
import { value1, value2 } from './ModuleA.mjs';
console.log(value1, value2); // 42 hello
```

2.  Default Export:

In both module systems, you can have a default export. This is a single value that is exported as the main export of the module.

CommonJS Example:

```
// CommonJS
// ModuleA.js

const value = 42;
module.exports = value;

// CommonJS
// ModuleB.js

const importedValue = require('./ModuleA');
console.log(importedValue); // 42
```

ESM Example:

```
// ESM
// ModuleA.mjs

const value = 42;
export default value;

// ESM
// ModuleB.mjs

import importedValue from './ModuleA.mjs';
console.log(importedValue); // 42
```

---

📌 Lecture 87

Working with Files: fs and path Modules

In Node.js, the fs (file system) module and the path module are commonly used for working with the file system and handling file paths. Additionally, starting from Node.js version 10, a set of promises-based APIs for the fs module is available through fs/promises.

1. fs Module:

   1. The fs module provides a set of functions for interacting with the file system, such as reading or writing files, creating or removing directories, and more.

   2. It includes both synchronous and asynchronous methods. The synchronous methods block the execution of code until the operation is complete, while asynchronous methods use callbacks or Promises to handle the results.

=> Example of synchronous file reading using fs:

```
const fs = require('fs');
try {
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
} catch (err) {
console.error(err);
}
```

=>Example of asynchronous file reading using fs:

```
 const fs = require('fs');
 fs.readFile('example.txt', 'utf8', (err, data) => {
 if (err) {
 console.error(err);
 return;
 }
 console.log(data);
 });
```

2. fs/promises Module:

   1. The fs/promises module provides a set of promise-based APIs for file system operations, making it more convenient to work with asynchronous code using async/await.

   2. The methods in fs/promises return Promises, eliminating the need for callbacks.

=> Example of asynchronous file reading using `fs/promises`:

```
 const fsPromises = require('fs/promises');
 async function readFileAsync() {
 try {
 const data = await fsPromises.readFile('example.txt', 'utf8');
 console.log(data);
 } catch (err) {
 console.error(err);
 }
 }
 readFileAsync();
```

3. path Module:

   1. The path module provides utilities for working with file and directory paths. It helps in constructing or manipulating file paths in a way that is platform-independent (handles differences between Windows and Unix-like systems).

   2. Common methods include path.join() for joining path segments and path.resolve() for resolving an absolute path.

Example of using the path module:

```
const path = require('path');
const filePath = path.join(__dirname, 'files', 'example.txt');
console.log(filePath);
```

These modules are essential for file system operations and path handling in Node.js applications. The choice between using the traditional `fs` module or the newer `fs/promises` module depends on whether you prefer callbacks or Promises in your asynchronous code.

---

📌 Lecture 88

1. Express vs. Plain HTTP:

   1. Abstraction and Simplification:

   Express provides a higher-level abstraction over the built-in HTTP module in Node.js. It simplifies the process of handling routes, middleware, and various HTTP methods. Creating a robust web server with Express is more concise and readable than using raw HTTP.

   2. Middleware Support:

   Express comes with a middleware system that allows you to easily extend the functionality of your application. Middleware can handle tasks such as authentication, logging, and error handling, making it a powerful feature for building complex web applications.

   3. Routing:

   Express provides a clean and organized way to define routes for different parts of your application. This makes it easier to manage and understand the structure of your server-side code.

2. Nodemon:

   1. Automatic Restart:

   Nodemon is a development tool that monitors your project files and automatically restarts the server whenever changes are detected. This eliminates the need to manually stop and restart the server after code modifications, which significantly speeds up the development workflow.

   2. Time-Saving:

   Nodemon saves developers time and effort, allowing them to focus on writing code rather than managing server restarts. It improves the overall developer experience by providing a smoother and more efficient development process.

3. Request Parameters and Queries:

   - Dynamic Routing:

   Request parameters and queries are essential for creating dynamic routes and handling dynamic data. Parameters are often used in route paths to capture variable values, while queries allow clients to send additional information as key-value pairs in the URL.

4. express.static:

   - Efficient Serving of Static Files:

   The `express.static` middleware is used to serve static files (like images, stylesheets, and client-side scripts) efficiently. It offloads the handling of these files from your main application logic, improving performance by allowing the webserver to serve them directly.

   - Cache-Control:

   Express provides options to set cache headers, allowing clients to cache static assets. This reduces the load on the server for repeated requests for the same static files, improving overall application performance.

---

📌 Lecture 89

Response, Request and Routers in Express

In Express, these HTTP request methods (GET, POST, PUT, DELETE, etc.) are used to handle different types of client-server interactions. Express is a web application framework for Node.js that simplifies the process of building robust and scalable web applications. :

1.  GET Request in Express:

Purpose: Retrieve data from the server.

```
app.get('/api/users', (req, res) => { // Code to retrieve and send data to the client });
```

2.  POST Request in Express:

Purpose: Submit data to be processed to a specified resource.

```
app.post('/api/users', (req, res) => { // Code to handle the submitted data and send a response });
```

3.  PUT Request in Express:

Purpose: Update a resource on the server.

```
app.put('/api/users/:id', (req, res) => { // Code to update the specified resource and send a response });
```

4.  DELETE Request in Express:

Purpose: Delete a resource on the server.

```
app.delete('/api/users/:id', (req, res) => { // Code to delete the specified resource and send a response });
```

---

1.  res.sendFile() - Send a File:

Purpose: Sends the specified file to the client.

```
app.get('/home', (req, res) => { res.sendFile(\_\_dirname + '/public/home.html'); });
```

2.  res.send() - Send Text/HTML:

Purpose: Sends the HTTP response.

```
app.get('/text', (req, res) => { res.send('This is a text response.'); });
```

3.  res.json() - Send JSON:

Purpose: Sends a JSON response.

```
app.get('/json', (req, res) => { res.json({ message: 'This is a JSON response.' }); });
```

4.  res.render() - Render a View:

Purpose: Renders a view template using a view engine.

```
app.get('/view', (req, res) => { res.render('index', { title: 'Express' }); });
```

3. Postman

Postman is an API development and testing tool that simplifies working with APIs. It allows users to easily create, send, and manage HTTP requests. For GET requests, you can query API endpoints and analyze responses. For POST requests, you can submit data and assess how the server processes it. Postman supports various HTTP methods and provides features like automated testing, collections, and collaboration, making it a versatile tool for API development and testing.

4. Routers

In Express.js, routers are used to modularize and organize routes in your application. They allow you to define sets of routes in separate files, promoting code organization and maintainability. Routers are created using express.Router() and can handle various HTTP methods. By using routers, you can structure your code more effectively and manage routes for different features or entities.

---

📌 Lecture 90

Middlewares in Express Js

In Express.js, middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware functions can perform various tasks, such as modifying request and response objects, ending the request-response cycle, and calling the next middleware function in the stack.

Middleware functions in Express are used to add functionality to the application, handle tasks like logging, authentication, parsing request bodies, etc. They are executed sequentially in the order they are defined in the application.

Here is an example of a simple middleware function in Express:

Example:

```
const express = require('express');
const app = express();

// Middleware function
const myMiddleware = (req, res, next) => {
 console.log('This is a middleware function');
 next(); // Call the next middleware function in the stack
};

// Using the middleware
app.use(myMiddleware);

// Route handler
app.get('/', (req, res) => {
 res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
 console.log('Server is running on port 3000');
});
```

In this example, `myMiddleware` is a simple middleware function that logs a message and then calls the `next` function to pass control to the next middleware or route handler in the stack.

Express provides various built-in middleware functions, and you can also create custom middleware functions to suit your application's needs. Here are some commonly used built-in middleware:

1. `express.json()` and `express.urlencoded()`:

Parse incoming JSON and URL-encoded data, respectively.

Example:

```
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
```

2. `express.static()`:

Serve static files (CSS, images, etc.) from a directory.

Example:

```
app.use(express.static('public'));
```

3. Logging middleware:

Print information about incoming requests.

Example:

```
const logger = (req, res, next) => {
console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
next();
};
app.use(logger);
```

4. Error handling middleware:

Handle errors that occur during the request-response cycle.

Example:

```
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something went wrong!');
});
```

These are just a few examples, and Express allows you to create custom middleware functions for specific requirements in your application. Middleware functions are powerful tools for enhancing the functionality of your Express.js application.

---

📌 Lecture 92

ejs Template Engine in Express

1. Template Engines:

Template engines like EJS facilitate the dynamic generation of HTML content on the server side. They allow you to embed dynamic data into your HTML views, making it easier to build web applications with varying content.

2. Express and View Engines:

   - Express Configuration:

   When building web applications with Express, you need a way to handle views (HTML templates). Express supports different view engines, and EJS is one of them. The `app.set('view engine', 'ejs')` line in your Express application tells Express to use EJS as the default view engine.

- Views Directory:

  The `app.set('views', __dirname + '/views')` line sets the directory where Express should look for views. By default, Express looks for views in a folder named "views" in the project's root directory. This line is useful if your views are in a different directory.

3. EJS Basics:

   - Tags:

EJS uses tags to embed JavaScript code into HTML. The `<% %>` tags are used for control flow, while `<%= %>` tags output the result of the code inside them.

Example:

```
<ul>
<% for(let item of items) { %>
<li><%= item %></li>
<% } %>
</ul>
```

- Variables

Variables passed from the server to the EJS template are accessible inside the template. In Express, you pass variables to the template using `res.render`.

Example:

```
// Express route
app.get('/', (req, res) => {
res.render('index', { name: 'John' });
});
```

ejs

```
 <!-- views/index.ejs -->
 <h1>Hello, <%= name %>!</h1>
```

4.  Rendering EJS Templates:

res.render:

In Express, the `res.render` method is used to render EJS templates. It takes the name of the template and an object containing data to pass to the template.

Example:

```
app.get('/', (req, res) => {
res.render('index', { name: 'John' });
});
```

5. Dynamic Content:

EJS enables the creation of dynamic content by embedding JavaScript code directly into HTML templates. This allows you to conditionally render elements, loop through arrays, and incorporate variables dynamically based on server-side data.

---

📌 Lecture 94 MongoDB

MongoDB

MongoDB is a popular open-source NoSQL database management system that is designed to handle large amounts of unstructured or semi-structured data. Unlike traditional relational databases, which use tables and rows, MongoDB stores data in a flexible, JSON-like format known as BSON (Binary JSON).

1. NoSQL Database: MongoDB is a NoSQL (Not Only SQL) database, which means it does not rely on the traditional relational database model. Instead, it uses a flexible, document-oriented approach.

2. Document-Oriented: Data is stored in flexible, JSON-like BSON (Binary JSON) documents, making it suitable for applications with dynamic or evolving data structures.

3. Schema Flexibility: MongoDB allows for dynamic schema design, enabling easy addition or removal of fields without affecting the overall database structure.

4. Scalability: Designed to scale horizontally, MongoDB can handle large datasets by distributing data across multiple servers or clusters.

5. Query Language: MongoDB supports a powerful and expressive query language, allowing for a wide range of operations, including filtering, sorting, and aggregation.

6. Indexing: The database supports indexing on fields, enhancing the performance of read operations and query efficiency.

7. Geospatial Capabilities: MongoDB has built-in support for geospatial indexing and queries, making it suitable for applications involving location-based data.

8. Horizontal Scaling: MongoDB's sharding capabilities enable the distribution of data across multiple servers, providing a scalable solution for handling increased data and traffic.

9. Community and Ecosystem: MongoDB has a large and active community, with robust support from various tools, libraries, and third-party integrations, contributing to its popularity and widespread adoption.

10. Use Cases: MongoDB is commonly used in web development, mobile app development, content management systems, and real-time analytics, where flexibility, scalability, and efficient data handling are essential.

---

📌 Lecture 95

CRUD Operations in MongoDB

CRUD operations (Create, Read, Update, Delete) are fundamental actions in any database system, including MongoDB. MongoDB provides a flexible and scalable NoSQL database solution, and its CRUD operations are performed using the MongoDB Query Language (MQL). Below are examples of CRUD operations and some MongoDB operators:

1. Create (Insert):

   1. Insert a Document:

   ```
   db.collection.insertOne({
   key1: value1,
   key2: value2,
   });
   ```

   2. Insert Multiple Documents:

   ```
   db.collection.insertMany([
   { key1: value1, key2: value2 },
   { key1: value3, key2: value4 },
   // ... other documents
   ]);
   ```

2. Read (Query):

   1. Find All Documents:

   ```
   db.collection.find({});
   ```

   2. Find Documents with a Condition:

   ```
   db.collection.find({ key: value });
   ```

   3. Find Documents with AND and OR Conditions:

   ```
   db.collection.find({
   $and: [
   { key1: value1 },
   { key2: value2 }
   ],
   $or: [
   { key3: value3 },
   { key4: value4 }
   ]
   });
   ```

3. Update:

   1. Update a Single Document:

   ```
   db.collection.updateOne({ key: value }, { $set: { newKey: newValue } });
   ```

   2. Update Multiple Documents:

   ```
   db.collection.updateMany({ key: value }, { $set: { newKey: newValue } });
   ```

4. Delete:

   1. Delete a Single Document:

   ```
   db.collection.deleteOne({ key: value });
   ```

   2. Delete Multiple Documents:

   ```
   db.collection.deleteMany({ key: value });
   ```

MongoDB Operators:

1.  Comparison Operators:

```
- `$eq`: Equal to
- `$ne`: Not equal to
- `$gt`: Greater than
- `$gte`: Greater than or equal to
- `$lt`: Less than
- `$lte`: Less than or equal to
```

2.  Logical Operators:

```
- `$and`: Logical AND
- `$or`: Logical OR
- `$not`: Logical NOT
- `$nor`: Logical NOR
```

3.  Element Operators:

```
- `$exists`: Matches documents that have the specified field
- `$type`: Selects documents if a field is of the specified type
```

4.  Array Operators:

```
- `$in`: Matches any of the values specified in an array
- `$nin`: Matches none of the values specified in an array
- `$all`: Matches arrays that contain all elements specified in the query
```

5. Update Operators:

```
- `$set`: Sets the value of a field
- `$unset`: Removes the specified field from a document
- `$inc`: Increments the value of the field by the specified amount
```

---

📌 Lecture 96

Installing Mongoose & Using it with Express

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level, schema-based abstraction over the MongoDB driver, making it easier to interact with MongoDB databases in a Node.js environment. Mongoose allows you to define schemas for your data models, perform validations, and provides a set of convenient methods for interacting with MongoDB.

1. Install Mongoose:

First, you need to install Mongoose in your project. You can do this using npm:

```
npm install mongoose
```

2. Create a Connection:

In your Express application, you need to establish a connection to your MongoDB database using Mongoose. This is typically done in your main server file (e.g., `app.js` or `index.js`).

3. Define a Schema:

Mongoose allows you to define a schema for your data models. A schema defines the structure of your documents.

```
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
username: { type: String, required: true },
email: { type: String, required: true },
password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);
```

4. Perform CRUD Operations:

Now that you have a schema, you can use it to perform CRUD (Create, Read, Update, Delete) operations on your MongoDB database.

```
// Example: Creating a new user
const newUser = new User({
username: 'john_doe',
email: 'john@example.com',
password: 'password123',
});


newUser.save((err, savedUser) => {
if (err) return console.error(err);
console.log('User saved:', savedUser);
});
```

5. Integrate with Express Routes:

Integrate your Mongoose models and operations into your Express routes to handle requests and interact with the database.

```
const express = require('express');
const router = express.Router();

router.post('/users', (req, res) => {
// Handle creating a new user using Mongoose model
// ...
});
router.get('/users/:id', (req, res) => {
// Handle fetching a user by ID using Mongoose model
// ...
});
// Add more routes as needed
```

---

📌 Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup. It's different from traditional CSS frameworks because it doesn't come with pre-designed components. Instead, it offers a set of utility classes that cover a wide range of styling options, allowing you to compose styles quickly and efficiently.

How to setup Tailwind CSS

Step 1: Run the following commands

```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.conf.js file to include this line:

```
content: ["*.html"],
```

Step 3: create src/input.css to include:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html

Step 5: Run the following command:

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 6 : Tailwind provides a command-line tool for processing your styles and generating a production-ready stylesheet. Add the following script to your package.json:

```
"scripts": {
 "build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
}
```

---

- breakpoints

In Tailwind CSS, breakpoints are used to define responsive design utilities for different screen sizes. Tailwind provides pre-defined breakpoints for different screen sizes, and you can use these breakpoints to apply styles based on the screen width.
Here are the default breakpoints in Tailwind CSS:

```
- `sm`: Small screens (640px and up)
- `md`: Medium screens (768px and up)
- `lg`: Large screens (1024px and up)
- `xl`: Extra large screens (1280px and up)
- `2xl`: Extra extra large screens (1536px and up)
```

📌 What is Hosting? Where to Host? Which Hosting?

Hosting refers to the service of providing infrastructure, resources, and technologies to make a website or application accessible on the Internet. When you create a website or web application, you need a place to store and serve the files that make up your site, and that place is known as a hosting server. Hosting services can vary in terms of features, performance, security, and cost. There are several types of hosting, each catering to different needs:

1. Shared Hosting:

Description: In shared hosting, multiple websites share resources (such as CPU, RAM, and disk space) on a single server. It is cost-effective but may lead to slower performance if other sites on the server experience high traffic.
Ideal for: Small websites, blogs, and startups with moderate traffic.

2. Virtual Private Server (VPS) Hosting:

Description: VPS hosting offers a virtualized private server within a larger physical server. It provides more control and resources compared to shared hosting but is more affordable than dedicated hosting.
Ideal for: Growing websites with increasing traffic and resource needs.

3. Dedicated Hosting:

Description: In dedicated hosting, you have an entire physical server dedicated to your website or application. This provides maximum control, customization, and performance but comes at a higher cost.
Ideal for: Large websites, high-traffic applications, and businesses with specific security and performance requirements.

4. Cloud Hosting:

Description: Cloud hosting utilizes a network of virtual servers to distribute resources and ensure high availability. It is scalable, allowing you to adjust resources based on demand.
Ideal for: Websites and applications with varying traffic levels and those requiring scalability.

5. Managed WordPress Hosting:

Description: This hosting is specifically optimized for WordPress websites. It often includes features like automatic updates, enhanced security, and specialized support.
Ideal for: WordPress websites of all sizes.

When choosing a hosting provider, consider factors such as reliability, performance, customer support, security features, scalability, and pricing. Popular hosting providers include Azure, AWS, and Google Cloud for cloud hosting, and companies like Bluehost, SiteGround, and HostGator for shared and VPS hosting. The choice depends on your specific requirements and budget.

---

📌 Hosting an Express App on Ubuntu VPS using Hostinger

- How to host Node.js apps on Ubuntu

  - Step 1 - Installing Node.js & build essentials

  ```
  command -> curl -fsSL https://lnkd.in/d968m9dh | sudo -E bash
  sudo apt-get install -y nodejs
  ```

Now install build-essentials

```
command -> sudo apt-get install build-essential
```

- Step 2 - Create a sample Node.js app

You can also use your app if you want to host it. Otherwise, if you are just trying it out, you can use a sample app.

- Step 3 - Install pm2 & launch your app

Install the pm2 package which is a process manager for Node.js applications

```
command -> sudo npm install -g pm2
```

Now launch your app using this command

```
command -> pm2 start index.js
```

- Step 4 - Install nginx

Nginx is a web server which we will be using as a proxy

```
command -> sudo apt install nginx
```

Now edit the file at /etc/nginx/sites-available/default using the following command

```
command -> sudo nano /etc/nginx/sites-available/default
```

We want this file to look like this:

```
location / {
}
proxy_pass http://localhost: 3000;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
```

- Step 5 - Test and restart nginx

Test and restart nginx using the following commands

```
command -> sudo nginx -t
```

Now restart using:

```
command ->sudo systemctl restart nginx
```

---

📌 Introduction to React & Why use React?

1. State Management:

React allows developers to manage the state of components efficiently. When the state of a component changes, React automatically updates the relevant parts of the UI, leading to a smoother user experience.

2. Component-Based Architecture:

React enables developers to break down their applications into smaller, reusable components. This modular approach enhances code organization, promotes reusability, and simplifies maintenance.

3. Virtual DOM:

React employs a virtual DOM, a lightweight representation of the actual DOM. This virtual DOM allows React to efficiently update the UI by minimizing direct manipulation of the real DOM, resulting in improved performance and responsiveness.

4. Debugging and Maintenance:

React's component-based architecture and declarative approach to building UIs make debugging and maintenance more manageable. Components are self-contained units, making it easier to isolate and fix issues. Additionally, React's clear and concise syntax enhances code readability, facilitating ongoing maintenance efforts.

---

📌 Components, Props and JSX in React

In React, components are the building blocks of user interfaces. They are reusable and encapsulate a piece of UI functionality. Components can be either functional components or class components.

1. Functional Components:

Functional components are JavaScript functions that take props (short for properties) as arguments and return React elements. Functional components are easy to read, write, and understand, making them a preferred choice for many simple UI elements in React applications. With the introduction of React Hooks, functional components can now also manage state and have access to lifecycle methods, making them even more powerful and versatile.

jsx

```
function Greeting(props) {
return <h1>Hello, {props.name}!</h1>;
}
```

2. Props are inputs to components, similar to function arguments. They allow you to pass data from parent to child components.

jsx

```
// ParentComponent.js
function ParentComponent() {
 return <ChildComponent name="Alice" />;
}
```

```
// ChildComponent.js
function ChildComponent(props) {
 return <h1>Hello, {props.name}!</h1>;
}
```

3. JSX (JavaScript XML) is a syntax extension for JavaScript, commonly used with React to describe what the UI should look like. It looks like HTML but gets transformed into regular JavaScript function calls.

```
// JSX
const element = <h1>Hello, world!</h1>;
```

```
// Transformed JavaScript
const element = React.createElement('h1', null, 'Hello, world!');
```

JSX allows you to write HTML-like code within JavaScript, making it more intuitive and readable, especially when building complex UIs with React components.
Components, props, and JSX are fundamental concepts in React, forming the basis for building modular and reusable UIs in modern web applications.

---

📌 Hooks & State in React

React Hooks, including useState, is a feature that allows functional components to manage state and have access to other React features without writing a class.

useState is a Hook that allows you to add a React state to a functional component. It returns a pair of values: the current state and a function that updates it. This function can be called with a new state value and the component will re-render with the updated state.

Here's a basic example of how to use useState:

```
import React, { useState } from 'react';
function Counter() {
 // Declare a state variable named "count"
 const [count, setCount] = useState(0);

 return (
 <div>
 <p>You clicked {count} times</p>
 <button onClick={() => setCount(count + 1)}>
 Click me
 </button>
 </div>
 );
}
```

In this example, count is the state variable, and setCount is the function to update it. Initially, count is set to 0. When the button is clicked, setCount is called with the new value of count + 1, updating the state and triggering a re-render.

You can use useState multiple times in a single component to manage different pieces of state independently. Remember that the argument you pass to useState is the initial state value, which can be a primitive value like a number or string, or even an object or array.

Hooks like useState can be used in functional components alongside other hooks like useEffect, useContext, etc., providing a more flexible and concise way to manage state and side effects in React applications.

---

📌 The useEffect Hook in React

The useEffect hook is a built-in React hook that allows you to perform side effects in function components. Side effects are actions that happen as a result of the component's lifecycle, such as fetching data, subscribing to services, or updating the DOM.

You can use the useEffect hook to manage side effects in your functional components. It takes two arguments: a function and an optional dependency array.

1. Function Argument: The first argument is a function that contains the code you want to run as a side effect. This function will run after every render by default, but you can control when it runs by specifying dependencies (explained below).

2. Dependency Array: The second argument is an optional array of dependencies. If provided, React will only re-run the effect if any of the dependencies have changed since the last render. If the dependencies array is empty, the effect will only run once after the initial render, similar to componentDidMount in class components.

Here's a breakdown of common use cases for useEffect:

1. Fetching Data: You can use `useEffect` to fetch data from an API when the component mounts.

2. Subscriptions: If your component needs to subscribe to events or services (e.g., WebSocket connections), you can use useEffect to set up and tear down those subscriptions.

3. DOM Manipulation: If you need to manipulate the DOM directly (though this is usually avoided in React), you can do so inside an effect.

4. Cleaning Up: You can return a cleanup function from the effect, which will be executed when the component unmounts or when the effect's dependencies change. This is useful for cleaning up resources such as subscriptions or timers.

In summary, the useEffect hook in React is a powerful tool for managing side effects in function components, allowing you to keep your component logic organized and efficient.

---

📌 Conditional Rendering & Rendering Lists in React

Conditional rendering and rendering lists are fundamental concepts in React that allow developers to dynamically adjust the UI based on certain conditions or data.

1. Conditional Rendering

Conditional rendering refers to the ability to display different components or content based on certain conditions. This can be achieved using JavaScript expressions within JSX, such as `if` statements, ternary operators, or logical operators like `&&`.

1.  Example using `if` statement:

```
function MyComponent({ isLoggedIn }) {
if (isLoggedIn) {
return <UserDashboard />;
} else {
return <Login />;
}
}
```

2.  Example using ternary operator:

```
function MyComponent({ isLoggedIn }) {
return isLoggedIn ? <UserDashboard /> : <Login />;
}
```

3.  Example using logical operators like `&&`:

```
function MyComponent({ isLoggedIn }) {
return (
<div>
{isLoggedIn && <UserDashboard />}
</div>
);
}
```

In this example, if isLoggedIn is true, `<UserDashboard />` will be rendered. If isLoggedIn is false, nothing will be rendered after the && operator.

2. Rendering Lists

Rendering lists involves dynamically rendering multiple components based on an array of data. This is commonly done using the map() function, where each item in the array is mapped to a corresponding component.

Example:

```
function MyListComponent({ items }) {
 return (
 <ul>
 {items.map((item) => (
 <li key={item.id}>{item.name}</li>
 ))}
 </ul>
 );
}
```

In this example, the map() function iterates over each item in the items array, creating a list item (<li>) for each item with its name. The key prop is necessary to help React identify which items have changed, added, or removed efficiently.

By mastering conditional rendering and rendering lists, developers can create UIs that adapt seamlessly to changes in data or user interactions, providing a smoother and more engaging user experience.

---

📌 Handling Events in React

1. Controlled Components:

Each input element should be a controlled component, meaning its value is controlled by the React state. You set the input's value prop to the corresponding state variable and provide an onChange event handler to update the state when the input changes.

2. State Management:

Define state variables to hold the values of the input fields. Each state variable corresponds to one input field.

3. Event Handling:

Implement an event handler function (typically named handleChange) to update the state when any input value changes. This function will be called whenever the user interacts with any input.

4. Usage:

Attach the event handler function to the onChange event of each input element. This ensures that the state is updated for each input.

If you want to handle input for an object in React, you need to adjust your event handlers and state management to accommodate nested data structures.

Here's a simplified version using basic React concepts and concise syntax:

Code :

```
import React, { useState } from 'react';

function ObjectInputExample() {
 const [person, setPerson] = useState({ firstName: '', lastName: '', email: '' });

 const handleChange = (e) => {
 const { name, value } = e.target;
 setPerson(prevState => ({ ...prevState, [name]: value }));
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 console.log('Submitted person:', person);
 };

 return (
 <form onSubmit={handleSubmit}>
 <input type="text" name="firstName" value={person.firstName} onChange={handleChange} placeholder="First Name" />
 <input type="text" name="lastName" value={person.lastName} onChange={handleChange} placeholder="Last Name" />
 <input type="email" name="email" value={person.email} onChange={handleChange} placeholder="Email" />
 <button type="submit">Submit</button>
 </form>
 );
}

export default ObjectInputExample;
```

In this version:

1. We define a `person` state variable using `useState`.

2. The `handleChange` function updates the `person` state when the user types in any input field.

3. The `handleSubmit` function logs the `person` object when the form is submitted.

4. Each input element is directly controlled by the React state.

5. We use concise syntax for event handlers and input elements, making the code easy to understand and maintain.

---

📌React Router: Routing in React

React Router is a popular library for handling routing in React applications. Routing is the process of determining which components to render based on the current URL. React Router enables you to create single-page applications (SPAs) with multiple views without reloading the page.

Here's a basic overview of how to use React Router:

1. Installation:

Start by installing React Router via npm.

```
 npm install react-router-dom
```

2. Setting up Routes:

Define routes for your application using the `<Route>` component. You usually do this in the main component of your application.

```
 import { BrowserRouter as Router, Route } from 'react-router-dom';
 import Home from './components/Home';
 import About from './components/About';

 function App() {
 return (
 <Router>
 <div>
 <Route path="/" exact component={Home} />
 <Route path="/about" component={About} />
 </div>
 </Router>
 );
 }
 export default App;
```

3. Creating Components:

Create components for each route. For example, you might have a `Home` component for the home page and an `About` component for the about page.

```
 // Home.js
 import React from 'react';

 function Home() {
 return <h2>Home</h2>;
 }
 export default Home;
```

```
 // About.js
 import React from 'react';

 function About() {
 return <h2>About</h2>;
 }
 export default About;
```

4. Navigation:

Use the `<Link>` component from React Router to create links for navigation.

```
import { Link } from 'react-router-dom';

function Navigation() {
return (
<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/about">About</Link>
</li>
</ul>
</nav>
);
}
export default Navigation;
```

5. Dynamic Routes:

React Router supports dynamic routes using parameters.

```
<Route path="/user/:username" component={User} />
```

In the `User` component, you can access the parameter using `props.match.params.username`.

6. Nested Routes: You can nest routes within components to create more complex routing structures.

```
 <Route path="/products" component={Products}>
 <Route path="/products/:id" component={ProductDetail} />
 </Route>
```

React Router provides many more features like route guarding, redirects, and programmatic navigation. It's a powerful tool for managing navigation and state in React applications.

---

📌 The usecontext hook in React

The useContext hook in React is a built-in hook that allows functional components to consume context created by the React.createContext() API. Context provides a way to pass data through the component tree without having to pass props down manually at every level. The useContext hook allows you to subscribe to a context within a functional component, enabling you to access the context value and subscribe to changes in that value.

Here's a simplified explanation of how useContext works:

1. Create Context:

First, you create a context using React.createContext(). This creates a Context object that holds the current context value.

2. Provide Context Value:

You then wrap your component tree with a Context.Provider component and pass it the value you want to share.

3. Consume Context Value:

Inside any functional component that is nested within the Context.Provider, you can use the useContext hook to access the current context value.

Code:

```
import React, { createContext, useContext } from 'react';

// Step 1: Create Context
const MyContext = createContext();

// Step 2: Provide Context Value
function ParentComponent() {
 return (
 <MyContext.Provider value={'Hello from Context!'}>
 <ChildComponent />
 </MyContext.Provider>
 );
}

// Step 3: Consume Context Value
function ChildComponent() {
 const contextValue = useContext(MyContext);
 return <div>{contextValue}</div>;
}

function App() {
 return (
 <div>
 <ParentComponent />
 </div>
 );
}
export default App;
```

In this example:

1. ParentComponent provides the context value Hello from Context!'.

2. ChildComponent consumes the context value using the useContext hook.

3. When ChildComponent is rendered within the MyContext.Provider in ParentComponent, it can access and render the context value.

This approach allows you to avoid prop drilling and makes it easier to manage shared state or data across multiple components in your React application.

---

📌 The useMemo hook in React

In React, the useMemo hook is used to memoize the result of a function call and recompute the memoized value only when one of the dependencies has changed. This can be useful for optimizing performance by avoiding unnecessary re-renders or expensive computations.

Here's a basic example of how `useMemo` can be used:

```
import React, { useState, useMemo } from 'react';

const MyComponent = () => {
 const [count, setCount] = useState(0);

 // Memoizing the result of an expensive computation
 const memoizedValue = useMemo(() => {
 // Some expensive computation based on count
 console.log("Expensive computation...");
 return count * 2;
 }, [count]); // Recompute when count changes

 return (
 <div>
 <p>Count: {count}</p>
 <p>Memoized Value: {memoizedValue}</p>
 <button onClick={() => setCount(count + 1)}>Increment Count</button>
 </div>
 );
};
export default MyComponent;
```

In this example:

1. We have a component MyComponent that renders a count value and a memoized value.

2. useMemo is used to memoize the result of an expensive computation (multiplying count by 2 in this case).

3. The memoized value is recalculated only when the count state changes because it's specified as a dependency to useMemo.

4. If you click the "Increment Count" button, you'll see that the expensive computation is only performed when the count state changes, not on every render.

useMemo is particularly useful when you have computationally expensive operations or calculations inside a component that you want to avoid running unnecessarily on each render. It helps in optimizing the performance of your React application.

---

📌 The useCallback hook in React

In React, the useCallback hook is used to memoize functions, which helps in optimizing performance by preventing unnecessary re-renders of components, especially when passing functions as props to child components.

When you create a function inside a functional component, React re-creates that function on each render. This behavior can lead to performance issues, especially if the function is passed down to child components as a prop.

Here's an explanation of why and how to use useCallback with theory and code:

1 . Why use useCallback?

1. Preventing unnecessary renders:

If a function is re-created on every render, React may consider it as a new reference, causing child components to re-render unnecessarily. By memoizing the function using useCallback, you ensure that the function reference remains the same unless its dependencies change.

2. Optimizing performance:

Memoizing functions with useCallback can help optimize performance, particularly in scenarios where components are re-rendering frequently due to changes in props.

2. How to use useCallback:

```
import React, { useState, useCallback } from 'react';

function ParentComponent() {
 const [count, setCount] = useState(0);
 // Define a function that increments count
 const incrementCount = () => {
 setCount(prevCount => prevCount + 1);
 };
 // Memoize the function using useCallback
 const memoizedIncrement = useCallback(incrementCount, []);
 return (
 <div>
 <ChildComponent increment={memoizedIncrement} />
 <p>Count: {count}</p>
 </div>
 );
}
function ChildComponent({ increment }) {
 return (
 <button onClick={increment}>
 Increment Count
 </button>
 );
}

export default ParentComponent;
```

In this example:

1. We define a ParentComponent that maintains a count state.

2. Inside ParentComponent, we define a function incrementCount that updates the count state.

3. We use useCallback to memoize incrementCount. Since it has no dependencies (`[]`), it will only be re-created once.

4. The memoized function memoizedIncrement is passed down to ChildComponent as a prop.

5. In ChildComponent, we use the memoized function increment as the click event handler for a button.

By memoizing incrementCount using useCallback, we ensure that ChildComponent does not re-render unnecessarily when count changes, thus optimizing performance. This is because the function reference remains the same across renders unless its dependencies change.

---
