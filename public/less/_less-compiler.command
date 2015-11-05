cd /Users/maximefabas/Sites/Lendopolis/public/
rm -rf stylesheets
mkdir stylesheets
lessc less/grid.less stylesheets/grid.css
lessc less/header.less stylesheets/header.css
lessc less/nav.less stylesheets/nav.css
lessc less/reset.less stylesheets/reset.css
lessc less/style.less stylesheets/style.css
lessc less/text-levels.less stylesheets/text-levels.css