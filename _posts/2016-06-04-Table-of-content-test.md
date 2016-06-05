---
layout: post
title: "Testing out Table of content"
description: "Testing of table of content using Markdown"
headline: 
modified: 2016-06-04
category: webdevelopment
tags: [table]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
---
<section id="table-of-contents" class="toc">
  <header>
    <h3 >Contents</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section><!-- /#table-of-contents -->

## How to generate table of content

First use Markdown heading (by preceding each headline with one or more hack symbols `#` or `##` etc)
Now insert the following line of codes at the top of your page (just after the front matter) like so.

{% highlight %}
<section id="table-of-contents" class="toc">
  <header>
    <h3 >Contents</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section>

{% endhighlight %}

    

     
 
 
## MarkdownPad2
The earliest windows standalone editor with viewer.
It has most of the basic feature
Advance features such as Table of Content, code fencing block etc require Pro version which is around US$14.90
This app was installed in `d:\markdown`

## MultiMarkdown
It is a command console utility that can convert markdown to HTML, RTF,  OPML, or OpenDocument.
This utility was installed in `C:\Program Files (x86)\MultiMarkdown 5.0.1\bin`
MultiMarkdown has problem running.  Don't seem to be able to have the right to create output file in program files (x86)
**Not impress with MultiMarkdown** and now it has problem uninstalling.
For converting from Markdown to Words, **use online Markable**.


## WriteMonkey
This is a barebone markdown editor.  It is a clean blank editor with no user interface.  You can right-click to access its menu.
The is no built-in menu
This app was installed in `D:\WriteMonkey`

## Strapdown
This is an html file version using external or internal javascript reference.
The file must have an .html extension.

> 1. Cross-browser compatible (tested with mobile Safari, IE 8/9,  Firefox, Chrome)
> 2. Github-flavored Markdown (tables, syntax highlighting, etc)
> 3. Code fencing block
> 4. Themes
> 5. Can easily implement Font Awesome. Refer to `D:\strapdown\strapdown_font_awesome`
> 6. Can implement emoji. Refer to `D:\strapdown\strapdown_emoji`
> 


You start the html with a minimum html just like so.

~~~
<!DOCTYPE html>
<html>
<title>Hello Strapdown</title>
<meta charset="utf-8">
<xmp theme="cerulean" style="display:none;" toc="true" >
	    your markdown text
	.....  your markdown content

<script src="strapdown.js"></script>
</html>
~~~

You can access Strapdown in `D:\strapdown`


## Notepad++
You can edit markdown document in Notepad++ by making changes to userDefineLang.xml file
For my current Notepad++, the xml file to edit is at `C:\Users\username\AppData\Roaming\Notepad++` 
The code to be inserted to userDefineLang.xml can be found at `D:\download\markdown_npp_zenburn-master`
To edit document in markdown, select `Language>Markdown`
Search Notepad++ in Evernote for detail setup.

**Note: I have removed Notepad++ markdown module in userDefineLang.xml as they are unreliable.

## ✔ Haroopad
Currently this **is the best Windows markdown editor and viewer**.
It supports

1.  Table
2.  Table of Content
3.  Code fencing block such as html, javascript etc.
4.  It has BOTH editor and viewer
5.  Both editor and viewer have convenient theme selections
6.  Draw flow diagram
7.  Drag and drop support; can even drag n drop images
8.  Embed rich media such as video, audio, 3D, open graph
9.  Auto save
10.  Search and replace
11.  Form check boxes
12.  Chinese support: 中文(简体)
13.  You can send the document as email with the option to Evernote. However email to Evernote is a paid feature for Evernote Premium.
14.  Export to html allows you to select file and folder to save
15.  Export Styled HTML is exported to clipboard.
16.  Support some of the Windows soft keyboard emojis ❤ ™ ❄↗↘➡↖↕↔↙♐♓♒♋⌚♎♊



**Drawbacks**

1.  No document Tab
2.  Donation request 