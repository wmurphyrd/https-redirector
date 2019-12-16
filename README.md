# https-redirector

Standalone server to redirect all http traffic to https

I use with `authbind` to give node access to port 80

One-time setup for authbind:

```bash
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown %user% /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80
```

To run the server:

```bash
npm start
```
