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