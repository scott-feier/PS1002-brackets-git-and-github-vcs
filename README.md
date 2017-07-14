# &copy; Practical Series of Publications

###### A series of technical documents for engineers (and others)

# Git, GitHub and Brackets VCS Website <img src="http://practicalseries.com/1002-vcs/11-resources/02-images/02-build-status/D02-02-04.svg">

<p align="center">
    <img width="300px" src="0-0201-repository-information/01-images/logo-lrg-min.png">
</p>

This is the website source code for the Practical Series of Publications website:
**Understanding Git & GitHub with Brackets**.

## Revision information

The master branch only contains either finished publishable work or a completed and released website. 

Publishable work is a section of the website that is complete in itself—it does not indicate that the whole website is finished, just that the section in question is complete, tested and deployable.

Development work always takes place on a separate branch. Development branches always spur from some published or released point on the master branch.

**The current published and development status is:**


| Branch             | Revision
| ------------------ | --------------------------------------
| master             | <img src="http://practicalseries.com/1002-vcs/11-resources/02-images/02-build-status/P02.svg">
| d-02-concept       | <img src="http://practicalseries.com/1002-vcs/11-resources/02-images/02-build-status/D02-02-04.svg">

## Contents

This publication (website) is, in effect an online book. The purpose of this book is to explain how the Git *version control system* (VCS) and its online partner in crime GitHub work; specifically how these two applications can be made to work from within the development environment of the Brackets text editor.

I explain everything from scratch:
1.	The concepts used by Git and GitHub for version control
2.	Installing Git
3.	Using Git Bash (Git’s command line terminal) to set up the default configuration for Git on your machine
4.	Setting up a GitHub account
5.	Installing Brackets and the tools needed to incorporate Git and GitHub
6.	An example web project to demonstrate the proper way to use Brackets and the Git and GitHub version control system
7.	Instructions for working with GitHub directly
8.	Using GitHub in collaboration with others

I also provide additional material explaining the command line interface and some useful information for developing with GitHub.

## Installation

There are no installation requirements for the website itself (it’s just a website—*obviously you need a browser, but you wouldn’t be here if you didn’t have that*).

However, the website explains Git and GitHub from the point of view of using them via the Brackets text editor with the Brackets-git extension installed.

There are four stages to the installation:
1.	Install Git it’s available at the [Git-SCM](https://git-scm.com/) website
2.	Install a default text editor for the Git command line, I use [Notepad++](https://notepad-plus-plus.org/)
3.	Install [Brackets](http://brackets.io/)
4.	Install the [Brackets-Git](https://github.com/zaggino/brackets-git) extension

I give very detailed instructions explaining how to do all of this on the website and within the associated PDF document.

## Permissions in lieu of a licence

### THIS REPOSITORY IS NOT OPEN SOURCE

Everything in this repository belongs to me and not you.

I give you permission to use this repository to learn about Git, GitHub and the Brackets interface, including downloading and modifying the examples provided within the website.

I also give you permission to reuse or adapt any of the website source code, specifically the JavaScript, CSS and HTML elements for your own website projects. 

If you do wish to use the website source code, there is another [Practical Series Publication]( http://practicalseries.com/1001-webdevelopment/index.html) that better explains exactly how to do this.

**I do NOT** give permission for you to reuse or republish any of the content of this website or documents within this repository (including text, images, and PDFs).

**I do NOT** give permission for you to reuse the fonts that are embedded within the CSS files; these are purchased third party fonts—you may buy your own copy [here](http://practicaltypography.com/equity.html).

## Development branch abbreviations

All development branches begin with a lower case 'd', the bulk of the development work takes place within the website itself (the directory starting 5-2361) and development branches associated with this area have the simplest designation (d-). Other workflows have longer designations, these being in the form ```dXX-``` where ```XX``` are two uppercase letters that specify the appropriate area.

The following table contains the development branch abbreviations and associated workflow areas (folders):

| Development<br>branch abbreviation  | Associated repository folder
| ------------------ | --------------------------------------
| d-                 | 5-2361-website-source
| dAD-               | 0-0201-repostiory-information (admin)
| dWF-               | 5-2434-workflow diagrams

## Workflow status

The following shows the project status as a workflow diagram:

<img src="http://practicalseries.com/1002-vcs/11-resources/02-images/03-workflow/workflow.svg">

## Additional information

Additional detailed information about this repository and its local counterpart (including contributors, descriptions, publishing mechanisms &c.) is held in the [repository-info.md]( /0-0201-repository-information/repository-info.md) file
