from invoke import task

@task
def build(c):
    c.run('rm -rf crm/static/bundles/prod/*')
    c.run('node_modules/.bin/webpack --config webpack.prod.config.js --progress --colors')