```git checkout cicd```

# Continuous integration, Continuous deployment

- CI - kódok gyakori mergelése, buildelése, tesztelése, hogy az alkalmazás ne törjön, ne kerüljön sok időbe a merge
- https://en.wikipedia.org/wiki/Continuous_integration#Common_practices
- CD - Minden olyan módszer, ami ahhoz vezet, hogy gyakrabban releaseljünk

- Általában ezek sok technológia, eszköz összességéből áll össze. A középpontban valamilyen kódtár + pipeline + környezetek állnak.

- Mi most [GitHubot](https://github.com) (kódtár), [Travist](https://www.travis-ci.com) (pipeline) és [Herokut](https://dashboard.heroku.com) (deploy platform) használunk. Ezekre ingyenesen lehet regisztrálni.

- Heroku ponttól kezdve jó tutorial, de bash-t kell hozzá használni (cmd, powershell nem jó) http://webprogramozas.inf.elte.hu/#!/subjects/full-stack/git-ci-deploy

## Lépések

- Heroku regisztráció
- Herokuban alkalmazás létrehozása
- Heroku CLI telepítése (https://devcenter.heroku.com/articles/heroku-cli)
- Travis CI regisztráció
- Travis CI-ban github integráció engedélyezése
- Travis CLI telepítése (Ruby telepítés, travis gem telepítés, https://github.com/travis-ci/travis.rb#installation)
- A git repositoryban a következő parancsok
```
# Login to Heroku
heroku login

# One time setup: create a git remote to heroku
heroku git:remote -a <APPNAME>

# Generate the secured key
travis encrypt $(heroku auth:token) --pro
```

- .travis.yml elkészítése. Procfile elkészítése. Előkészülés a herokus indításra.
