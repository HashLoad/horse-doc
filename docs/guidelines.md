Anyone and everyone is welcome to contribute to *horse-doc*!

## Issues

Questions, feature requests and bug reports are all welcome as [discussions or issues](https://github.com/HashLoad/horse-doc/issues/new/choose). 
You can try to introduce new features available in mkDocs-Material, have a look at [mkdocs-material ](https://squidfunk.github.io/mkdocs-material/reference/) documention

To make it as simple as possible for us to help you, please include a link to a reference that has inspired you:

```bash
example: 
create Frequent Asked Questions for Horse
inspired by http://expressjs.com/pt-br/starter/faq.html Frequent Asked Questions
```
Please try to always include the reference or motivations for your issue.

## Pull Requests

It should be extremely simple to get started and create a Pull Request.
*horse-doc* is released regularly so you should see your improvements release in a matter of days or weeks.

## You're wellcome

to join us at https://t.me/+2dy_M7JhjEUxMWIx

!!! note
    Unless your change is trivial (typo, formatting tweak etc.), please create an thread in **Telegram** to discuss the change before
    creating a pull request.


To make contributing as easy and fast as possible, you'll want to run tests and linting locally. Luckily,
*python* has installed correctly, it doesn't require much effort to do it successfully.
Because of this, setting up and running the tests should be very simple.

You'll need to have a version between **python 3.7 and 3.10**, **virtualenv**, **git**, and **make** installed.

```bash
# 1. clone your fork and cd into the repo directory
git clone git@github.com:<your username>/horse-doc.git
cd pydantic

# 2. Set up a virtualenv for running tests
virtualenv venv
source env/bin/activate
# Building docs requires 3.7. 

# 3. Install mkdocs-material dependencies
pip install -r requirements.txt

# 4. Checkout a new branch and make your changes
git checkout -b my-new-feature-branch
# make your changes...

# 6. Run tests and linting
mkdocs-material run serve -a PORT
# there are a few sub-commands in mk-docs you can lear in documentation
# which you might want to use, but generally just `serve` should be all you need

# 7. Build documentation
cd docs\
mkdocs build
# if you have changed the documentation make sure it builds successfully
# you can also use `make docs-serve` to serve the documentation at localhost:8000

# ... commit, push, and create your pull request
```
