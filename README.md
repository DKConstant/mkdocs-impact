# How to contribute to Zenoss Cloud docs

This repository contains the source files for the Zenoss Cloud 
documentation site, [docs.zenoss.io](https://docs.zenoss.io).
We use [MkDocs](https://www.mkdocs.org/) with 
the [Material theme](https://squidfunk.github.io/mkdocs-material/)
and some unique extensions to build the site.

> GitHub renders files as [GitHub-Flavored Markdown](https://github.github.com/gfm/),
> so formatting is often incorrect.<br/>Pay no attention to GitHub's rendering!

Quick-nav links:

- [Small edits the easy way](#small-edits-the-easy-way)
- [Large edits the large way](#large-edits-the-large-way)
- [Markdown particulars](#markdown-particulars)
  - [Unsupported features](#unsupported-features)
  - [Includes](#includes)
  - [Admonitions](#admonitions)
  - [Code blocks](#code-blocks)
  - [Content tabs](#content-tabs)
  - [Images](#images)
  - [Icons](#icons)
  - [Links](#links)
  - [Lists](#lists)
  - [Tables](#tables)
  - [Glossary terms](#glossary-terms)
  - [Site navigation](#site-navigation)
  - [OpenAPI specs](#openapi-specs)
- [IP addressing](#ip-addressing)
- [CZ 3rd-party libs](#cz-3rd-party-libs)
- [Do not edit these files](#do-not-edit-these-files)

## Small edits the easy way

You don't have to clone this repository to make small changes to existing 
files; just follow these steps.

1.  Create a Jira ticket (ZING / Doc Update) for your change.

    The ticket doesn't have to be exhaustively descriptive; we just need a 
    place to track changes.

2.  On the `main` branch, drill down to the file you want to edit.

    The `docs-cloud-content/docs` directory is the root of page URLs:

    **URL**: `docs.zenoss.io/api/zenoss-api.html` <br/>
    **File**: `docs-cloud-content/docs/api/zenoss-api.md`

3.  Use [GitHub's instructions][GH tools] to edit the file.

    See [Markdown particulars](#markdown-particulars) for information
    about the Markdown we use. When you're done, commit your change to
    a branch named with the number of the Jira ticket you created in 
    step 1. The name must match the ticket number **exactly**. This 
    also creates a pull request.

4.  Repeat steps 2 and 3 as necessary.

5.  Post your PR in the [#customer-enablement][CE Slack] Slack channel.

    Someone from Customer Enablement has to approve the PR. We
    look for style and formatting issues, but otherwise leave the
    technical content to you.

Once approved and merged, `main` is automatically built and pushed to the site.

## Large edits the large way

For more extensive edits, you can clone this repository, pull our build tools
container, and work locally. For more information, please contact
your friendly local Customer Enablement representative.

## Markdown particulars

The [MkDocs user guide][MkDocs UG] and [Material reference][MatRef] 
provide the most relevant Markdown basics. This section documents 
our preferences among the many Material features and our unique extensions.

### Unsupported features

The features in this section are not used, either by convention or because the
supporting extensions are not included in our build environment:

-   [Abbreviations](https://squidfunk.github.io/mkdocs-material/reference/abbreviations/) are
    the Material way to manage glossary information; we're using [our own extension](#glossary-terms)
    instead.

-   [Buttons](https://squidfunk.github.io/mkdocs-material/reference/buttons/)
    are a landing page feature; we're using some custom CSS on that page.

-   [Diagrams](https://squidfunk.github.io/mkdocs-material/reference/diagrams/)
    via [Mermaid.js](https://mermaid-js.github.io/mermaid/#/) are available but 
    not currently in our build environment. Please ask [Mark](mailto:mshoemaker@zenoss.com) to
    install the extension before you proceed.

-   [Footnotes](https://squidfunk.github.io/mkdocs-material/reference/footnotes/)
    are not a thing in tech docs, although we do have some imitation footnotes in 
    [a few tables](https://docs.zenoss.io/streaming/kubernetes.html#metric-data).
    Please do not use footnotes.

-   The [formatting](https://squidfunk.github.io/mkdocs-material/reference/formatting/)
    features include [options for highlighting changes][MatRef critic]; we don't
    use highlights. Superscripts/subscripts and keyboard keys are supported.

-   [Emojis](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/)
    are not a thing in our docs. That could change but for now please do not
    add any emojis.

-   [Task lists](https://squidfunk.github.io/mkdocs-material/reference/lists/#using-task-lists)
    are not supported.

-   Like diagrams, support for [mathematical content](https://squidfunk.github.io/mkdocs-material/reference/mathjax/)
    via [MathJax](https://www.mathjax.org/) is available but not currently included
    in our build environment. Ping Mark.

-   [Meta tags](https://squidfunk.github.io/mkdocs-material/reference/meta-tags/)
    don't require any special extensions but we're not using them.

The preceding list is based on the contents of `docs-cloud-content/mkdocs.yml`
and may be out of sync. Check the file for the final word. (Some "extensions"
are actually plugins. :shrug:)

### Includes

You can [include content](https://pypi.org/project/mkdocs-include-markdown-plugin/)
from other files located in this repository.
The [2022 update notes](https://docs.zenoss.io/admin/updates/2022.html) use includes.
Please prepend the underscore character (`_`) to the names of files that are included, 
so we can easily spot files missing from the NAVIGATION.md file. The lone exception
is the latest.md file in the updates directory.

### Admonitions

Material provides a variety of [admonition styles][MatRef admon styles].
We just use the following:

-   `info`
-   `note`
-   `tip`
-   `warning`

Where appropriate, all but `info` can be plural. Please use
`warning` infrequently. Some consider it appropriate only in life-threatening
situations, which don't apply to our product.

You can [change the title][MatRef admon title] of an admonition if you like. Please include
title information in the body of the admonition as well.

You can present an admonition in an [inline block][MatRef inline block].
Here's [an example](https://docs.zenoss.io/dashboards/start.html) where an
inline block is appropriate. Please do not use [collapsible blocks][MatRef collapsible block].

### Code blocks

MkDocs includes some nifty [code block features](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/).
In general, code block titles are not used, primarily because most code blocks are commands in
procedures and titles distract from the instructions. Also, when code blocks 
are included in content tabs, the name of the tab provides equivalent value. Use titles for
the name of a file when the code block displays an entire file.

[This example](https://docs.zenoss.io/streaming/kubernetes.html#deploy-the-agent) uses line numbering
to ensure users edit the right line and a title because the block contains the entire file.

### Content tabs

[Content tabs](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/)
are very useful and we use them liberally. But not blindly! Required information should
never be behind a tab and all tabs should be visible without scrolling horizontally.
Note that the text behind non-default tabs is indexed for search along with everything else.

Examples:

-   [Map tiles](https://docs.zenoss.io/dashboards/reference/map.html#example-tiles)
-   [Destination options](https://docs.zenoss.io/actions/destinations.html#adding-a-destination)
-   [Request/reponse](https://docs.zenoss.io/api/event-mgmt/event-management.html#example)

### Images

We use a customized extension to display images with [Lightbox.js](https://victordiego.com/lightbox/).
The extension relies on the `@lb` macro, which we use almost exclusively, as in the
following example:

```shell
@lb[Bluh Kitteh alt text](img/bluh-kitteh.png)
```

Typically, PNG files have a `height` attribute appended, but they're conversion artifacts and can be
removed. You can and should append a `width` attribute, with a percent value, to SVG files
when the image would otherwise be too large. For example, the image at 
[step 1 in this section](https://docs.zenoss.io/dashboards/start/organizer.html#create-graph-tiles)
has `{width="50%"}` appended. So far, that trick doesn't work for PNG files. We have
other plans to normalize PNG image sizes (see [ZING-18044](https://jira.zenoss.com/browse/ZING-18044)).

The standard `!` macro is used only for special cases. 
On the OpenCensus page, the standard macro is required to make a link of the icon immediately below 
the [Go Exporter](https://docs.zenoss.io/streaming/opencensus.html#go-exporter) heading:

```shell
[![](img/opencensus-go-exporter-zenoss.svg)](https://godoc.org/github.com/zenoss/opencensus-go-exporter-zenoss)
```

Source files for diagrams and images with callouts are stored in a public GDrive folder, 
`Engineering/Platform Docs/ZING image source files`. In this repository, image files are
stored in an `img` subdirectory below the Markdown file in which they are used. Please use 
only lower-case letters, numbers, and hyphens in image file names.

We plan to upgrade image handling considerably. Please add general improvement requests 
to [ZING-18044](https://jira.zenoss.com/browse/ZING-18044).

### Icons

While emojis are out, a few Zenoss-specific [icons](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/) are in.
The following icons are available:

```
:zenoss-tile-anomalies:
:zenoss-tile-clock:
:zenoss-tile-entity-count:
:zenoss-tile-event-count:
:zenoss-tile-event-list:
:zenoss-tile-graph:
:zenoss-tile-map:
:zenoss-tile-metric-outliers:
:zenoss-tile-metric-plus-number:
:zenoss-tile-notes:
:zenoss-tile-service-health:
:zenoss-tile-stoplight:
:zenoss-tile-top-event-producers:
```

We'd like them to, but they don't work with the literate-nav extension. So you can't
put them in NAVIGATION.md. Right now, these icons are only used in the dashboards reference
section.

### Links

To simplify maintenance, we use [inline links](https://spec.commonmark.org/0.30/#inline-link).
There's no technical reason you can't use [reference links](https://spec.commonmark.org/0.30/#reference-link)
but please do not. Inline links can make for some awkwardly long lines; that's OK.

We append some CSS to external links:

```shell
[webhooks](https://en.wikipedia.org/wiki/Webhook){.external-link}
```

Someday, we'll update the build to distinguish external links with a little icon. Please include the CSS so that
your external link can join the party.

### Lists

In addition to the standard ordered and unordered lists, Material supports 
[definition lists](https://squidfunk.github.io/mkdocs-material/reference/lists/#using-definition-lists),
which can be handy replacements for otherwise-awkward tables. For example, all
tile configuration sections ([example](https://docs.zenoss.io/dashboards/reference/graph.html#tile-config-tab))
use definition lists.

### Tables

Markdown tables are relatively limited, so we often use raw HTML instead. The
[Markdown in HTML](https://python-markdown.github.io/extensions/md_in_html/) extension
is included in our build environment, so you'll see a hybrid of the two in source files.
In particular, links can use relative paths:

```shell
See <a href="/api/receiver/understanding-entities.html#metadata-attributes">Metadata attributes</a>.
```

For some reason, other features like inline font changes do not work. Use the equivalent 
HTML tags instead.

### Glossary terms

We use a customized extension to display glossary terms in a tooltip. The `@gl` macro 
identifies the terms. Our extension adds a stylized link to the term
and both displays the tooltip on mouseover and opens 
the [glossary page](https://docs.zenoss.io/glossary/glossary.html#api-client) on click.

```shell
@gl[API Client](api-client)
```

The text in square brackets gets the stylized link and the text in parentheses is the
key for the content to display in the tooltip. The map of keys and content is in
`docs-cloud-content/glossary.yml`, not `docs-cloud-content/docs/glossary/glossary.md`. 

You are welcome to add the `@gl` macro to user content files. However, to 
keep the glossary source files in sync and protect their contents, please file a 
Jira ticket to request changes to glossary terms. Pull requests that 
include the glossary source files will be rejected. 

### Site navigation

We define site navigation with the [literate-nav](https://oprypin.github.io/mkdocs-literate-nav/) 
extension instead of the MkDocs default, a section in [mkdocs.yml][MkNav].
The extension allows us to put content at hierarchy nodes instead of 
only at leaves, among other things. The navigation hierarchy is defined in 
`docs-cloud-content/docs/NAVIGATION.md`, which most contributors will never need to edit.

### OpenAPI specs

The [MkDocs render-swagger](https://pypi.org/project/mkdocs-render-swagger-plugin/) plugin 
is installed in our build environment. The plugin supports OAS 3.0. Just sayin'.

## IP addressing

The IETF has reserved specific address ranges for use in documentation. 

Example IPv4 addesses should conform to [RFC 5737](https://www.rfc-archive.org/getrfc.php?rfc=5737).
Available blocks:

| Block      | Net          | Mask          |
|------------|--------------|---------------|
| TEST-NET-1 | 192.0.2.0    | 255.255.255.0 |
| TEST-NET-2 | 198.51.100.0 | 255.255.255.0 |
| TEST-NET-3 | 203.0.113.0  | 255.255.255.0 | 

Example IPv6 addresses should conform to [RFC 3849](https://datatracker.ietf.org/doc/html/rfc3849).

The available subnet is `2001:DB8::/32`.

## CZ 3rd-party libs

The [list of 3rd-party Python libs](https://docs.zenoss.io/cz/zenpacks.html#3rd-party-libraries-available-for-use-in-zenpacks)
that custom ZenPack developers can use needs to be checked at each CZ release. 

1.  Ask a developer which tag/which branch of the [py-deps repo](https://github.com/zenoss/zenoss-py-deps)
    is the right one for the new release.
2.  Combine the `requirements_3rd.txt` and `requirements_opt.txt` files from that branch into one file.
3.  Copy the list from the aforementioned page into another file.
4.  Munge, sort, and diff the two files to find out what changed.

See [ZEN-22079](https://jira.zenoss.com/browse/ZING-22079) for more background. Note that there's no
effort to show changes between releases -- just update the file. Also, there's no mention of the changes
in the update notes unless a library is removed.

## Do not edit these files

This repository contains both user content and build or site infrastructure 
files. Edit user content files only; PRs that include any of the
following files will be rejected:

-   `docs-cloud-content/COPYRIGHT.txt`
-   `docs-cloud-content/glossary.yml`
-   `docs-cloud-content/LICENSE.txt`
-   `docs-cloud-content/mkdocs.yml`
-   `docs-cloud-content/overrides/*`
-   `docs-cloud-content/README.md`
-   `docs-cloud-content/docs/css/*`
-   `docs-cloud-content/docs/favicon.png`
-   `docs-cloud-content/docs/images/*`
-   `docs-cloud-content/docs/index.md`
-   `docs-cloud-content/docs/js/*`
-   `docs-cloud-content/docs/robots.txt`

Thanks!

[GH tools]: https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files#editing-files-in-your-repository

[CE Slack]: https://app.slack.com/client/T024Q5BBL/C0DEGBJ6P

[MkDocs UG]: https://www.mkdocs.org/user-guide/writing-your-docs/#writing-with-markdown

[MatRef]: https://squidfunk.github.io/mkdocs-material/reference/abbreviations/

[MatRef admon title]: https://squidfunk.github.io/mkdocs-material/reference/admonitions/#changing-the-title

[MatRef inline block]: https://squidfunk.github.io/mkdocs-material/reference/admonitions/#inline-blocks

[MatRef collapsible block]: https://squidfunk.github.io/mkdocs-material/reference/admonitions/#collapsible-blocks

[MatRef admon styles]: https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types

[MatRef critic]: https://squidfunk.github.io/mkdocs-material/reference/formatting/#highlighting-changes

[MkNav]: https://www.mkdocs.org/user-guide/writing-your-docs/#configure-pages-and-navigation
