heroku container:push web -a barstuff
heroku container:release web -a barstuff
heroku logs --tail -a barstuff