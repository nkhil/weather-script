# Weather CLI

[![Screenshot](./screenshot.png)](./screenshot.png)

I found out about the `curl wttr.in/London` method to get the current temperature in the command line, and wanted to customise it for my needs (for eg: I didn't want the graphics or icons).

This is a proxy service for the Openweather API that does some basic data manipulation & serves up the response in plain text so I can render it in a terminal.

## Note 

This currently only returns the weather for London (England). If you'd like other cities, please open an issue, submit a PR, or feel free to fork this repo and add your modifications.

I did consider adding location as a parameter, but this is just a personal project and I didn't want to add optimisations before I needed to.

## Usage

In your terminal, type:
```bash
curl https://curl-weather.herokuapp.com/
# Note that this endpoint is on a free-tier Heroku server
# So it might sometimes take more time to get a response
```

You can also create a function in your `.bashrc` or your `.zshrc` file like so: 

```bash
function weather() {
  curl https://curl-weather.herokuapp.com/
}
```

## Setup 

```bash
git clone https://github.com/nkhil/weather-script.git
cd weather-script
npm install
npm run develop
```
