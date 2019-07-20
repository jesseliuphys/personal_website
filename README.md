# Brief guide on using various components - for chumps

## Contents

1. [`<header>` of each page](#header)
2. [`<section>` and nested `<section>s`](#sections)
3. [`.intro` class and when to use it](#intro)
4. [`<article>` and using it for instances of content](#article)
5. [`.card`](#card)
6. [`.panel`](#panel)
7. [`.btn`](#button)
8. [Page specific styles (e.g. the header background)](#styles)
9. [You want to edit the css?](#css)

## <a name="header"></a>1. Header

The main sub-components:

- `.header-title` which will convert your text into uppercase and space the letters out a bit
- `.header-subtitle` for any additional text you need for the header. Use text sparingly, this is not for paragraphs. The class adds a small amount of spacing on the element.
- `.linknav` is not specifically a header component, but makes sense for placing intrapage links. This class spaces out (usually `<a>`) elements inside properly. 

#### Example

```html
<header>
  <h1 class="header-title">Title</h1>
  <p class="header-subtitle">Submarine titles</p> 
  <div class="linknav">
    <a href="#" class="btn frosted">Link A</a>
    <a href="#" class="btn frosted">Link B</a>
  </div>
</header>
```

## <a name="sections"></a>2. Section

This is the primary tag you should be using to group together related content. It is one of the 3 content tags: `<nav>`, `<header>`, `<section>` - that should be used as a direct descendent in `<body>`.
These top level `<section>s` should have an `id` for intrapage linking.
The main sub-components:

- `.section-header` - use in conjunction with the `.container` class to centre your content. A section header isn't mandatory, if your section doesn't have a title, you obviously don't need one!
  - `.section-title` used within a section-header
  - `.lead` used to emphasise a block of introductory text. Uses a lighter weight and large font size.
- `.section-content` - use in conjunction with the `.container`, where you put the main gubbins for your section. This one is mandatory since all sections will have some content. The class mainly provides spacing.
  Use the `<div>` tag if your section only has one main block of content. 
  Use a (nested) `<section>` tag if you are going to having multiple sub-sections.
  E.g.
  
  ```html
  <section id='some-id-name'>
    <div class='section-content'>
      Just one main block of content
    </div>
  </section>

  <section id='some-other-id'>
    <section class='section-content' id='bears'>
      <div class='section-content'>
        Bear content!
      </div>
    </section>
    <section class='section-content' id='deers'>
      <div class='section-header'>
        <h3>Deer me...</h3>
      <div>
      <div class='section-content'>
        Oh dear deer.
      </div>
    </section>
  </section>
  ```
  
## <a name="intro"></a>3. Intros

The `.intro` class is for special cases where immediately after your header, you want to have a block of introductory text for the entire page. 
The class will remove the extra gap between this and the subsequent section, so the top and bottom spacing is equal. This should only be used if the `<section>` that follows the intro does not have a different background color. 

#### Example

```html
<section class="container intro">  
  <div class="section-header">
    <p class="lead">A paragrpah introduction to the page</p>
  </div>
</section>
```

## <a name="article"></a>4. Article

Use `<article>` rather than `<div>` for wrapping actual content. Use `<div>` for spacing stuff out, e.g. using Bootstrap `.row` and `.col-*` classes.
This will commonly used with the `.card` and `.panel` classes since those represent multiple instances of related content under a single title. 

#### Example

```html
<!-- on its own -->
<article class='card'></article>

<!-- within Bootstrap grid -->
<div class='row'>
  <div class='col-6'>
    <article class='panel'></article>
  </div>
</div>
```

## <a name="card"></a>5. Cards

This employs the prebuilt [Bootstrap card components](https://v4-alpha.getbootstrap.com/components/card/), plus some extra bits and bobs. I'll just talk about the extra custom stuff here:

- `.resource-box` is a wrapper for where you can place any links to files that are associated with the paper
  - `.resource-links` is the container for the `<a>` links for your files. Usually these will be [button](#button) style links
- `.card-img-top` and `.card-img-bottom` have been customised so they have a border on the side touching the rest of the card contents. This can be colored as seen on the Design page to provide a visual separation from the rest of the card text, which is particularly useful when the image dwarfs the text.

## <a name="panel"></a>6. Panels

The `.panel` class is a fairly simply class, seen in the Themes section of the Research page. It spaces out blocks of content and ensures that each block takes up the full height of the parent. This is primary intended to maintain uniformity when using colored backgrounds.

## <a name="button"></a>7. Buttons

This is an override on the Bootstrap `.btn` class and gives a more distinctive appearance to buttons or links you want to emphasise.
There are a few varieties of buttons, split primarily into 2 groups: text-based (default) and icon-based.

### Text-based buttons

This is the default look when you just use the `.btn` class. It's a lightish grey background with dark grey text. This works best when the text is short, ideally short enough not to cause the text to wrap onto a new line. 
In the cases where a title is used for a card but still want it to be a link, use `.btn` with .`card-title`. Additional padding is added on the y-axis to better separate the potentially much longer title text from the rest of the card contents.

### Icon-based buttons

`.btn-square` is used to constrain a button to a fixed square-in-appearance shape. 
You can then add the following components inside:

- `<div class='btn-symbol'>` Use in conjunction with [font-awesome icons](#http://fontawesome.io/icons/)
- `<div class='btn-label'>` Use if you want to label a symbol, e.g. for your resource box links.

### Colored buttons

There are a number of pre-defined colors for the buttons. The classes don't do anything unless used along with the `.btn` class.
The main faffery with the css for these is to override behaviour defined by Bootstrap. 
You can only use one color at once, e.g. `<a class="btn square arxiv inspire journal">` - only the journal color will be applied
Your color choices are:

- `.frosted` - gives the button a slightly transparent white color, allowing the background to seep through subtly. The text color is inherited by cascade. This is best used on backgrounds that have a strong color and are comparatively dark, such as the header. It's pretty worthless on a white or very light background though!
- `.arxiv` - for all your sieving needs. White text on a deep red background
- `.inspire` - perhaps sarcastically name, white text on a gentle light blue
- `.slides` - use for direct links to your talk/presentation slides. white text no a PowerPointy orange
- `.journal` - any links to journal publications, ideally label what the publication is, acronyms if you need to cram it in! White text on a deep teal.

The general behaviour is:

- on hover, the buttons appear lighter in color
- on active, the button appears to be pressed down and the shadow darkens slightly
- on focus, a border appears around the button in the same color as the shadow. On the frosted one, the border is a light blue, because, well you wouldn't be able to see the white one.

#### Examples

```html
<!-- Normal text-based button with frosted look -->
<a href="#" class="btn frosted">Link A</a>

<!-- Hyperlinked card title -->
<a class="card-title btn btn-block" href="#" target="_blank">Card Title</a>

<!-- Colored icon button -->
<a class="btn square arxiv" href="#" target="_blank">
  <div class="btn-symbol fa fa-file-text-o" aria-hidden="true"></div>
  <div class="btn-label">arXiv.org</div>
</a>
```

## <a name="styles"></a>8. Page specific styling

The `section-styles.css` file is primarily for customising the background image of the header, you can add more custom styles to a specific page by nesting your custom styles within the corresponding css id selector. Have a gander at the other existing styles in the file to get an idea of further customisations that can be applied.

#### Example

```css
/*Note that this uses Postcss-cssnext to allow for nesting syntax*/
#bearpage { 
  & header {
    background: linear-gradient(gray(25%, 75%), gray(25%, 75%)), url(../img/mybackground.jpg);
    background-size: cover;
  }
}
```

## <a name="css"></a>9. Setup css compilation

### Install [Node.js](https://nodejs.org/en/) - the LTS release will do

```bash
# check it has installed
node --version
```

### Install node modules

```bash
npm install
```

### Install gulp cli

```bash
npm install --global gulp-cli
gulp --version
```

### Activate gulp script

```bash
gulp
```

### Make an edit to any of the css files in /src to trigger change and compilation
