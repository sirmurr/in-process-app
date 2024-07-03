# in-process-app
To start this program, in your terminal run the folowing command:  `docker-compose up -d --build`

To test this, type: `docker ps -a`

Then in a seperate terminal, type the following: `docker-compose exec db psql -U postgres -d accounts`
