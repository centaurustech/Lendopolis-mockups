cd /Users/maximefabas/Sites/Lendopolis/public/
rm -rf stylesheets
mkdir stylesheets
lessc less/footer.less stylesheets/footer.css
lessc less/grid.less stylesheets/grid.css
lessc less/header.less stylesheets/header.css
lessc less/nav.less stylesheets/nav.css
lessc less/reset.less stylesheets/reset.css
lessc less/style.less stylesheets/style.css
lessc less/test.less stylesheets/test.css