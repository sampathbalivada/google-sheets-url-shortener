
# Google Sheets URL Shortener

## A serverless URL shortener

***

This URL shortener uses the Google Sheets Data Visualisation API to get the relevant URL from Google Sheets.


> Disclaimer:
> * The sheet should be publicly viewable.
> * Private sheets require the user to be logged into a valid Google Account with read access to the Google sheet before using the short link.
> * The link format used here is 'www.sitelink.tld/#hash'.

## Instructions

### Method 1: Using boiler plate code

Download the current project and edit the fields as required.

1. Change the content in ```loading``` and ```error``` div's as required.
2. Change values of ```document_key``` and ```sheet_number```.
3. Change the assets in the assets folder as required.

### Method 2: Using CDN

1. Add this line to the html page: <br> ```<script src="https://cdn.jsdelivr.net/gh/sampathbalivada/google-sheets-url-shortener/main.js"></script>```
2. Add ```loading``` and ```error``` div's to the page.
3. At the bottom of the page add this

```javascript
<script>
    //Replace 'YOUR_DOCUMENT_KEY' with the document key of your Google sheet
    var document_key = "YOUR_DOCUMENT_KEY";
    //DEFAULT: 0
    var sheet_number = 0;
</script>
```

### Getting the ```document_key``` and ```sheet_number``` values

1. Get the shareable link of the Google sheet. <br> Example: ```https://docs.google.com/spreadsheets/d/1md58QgRgGI-PdmZMY_GJj-fXoX0L78D9AeK2NqOFiqY/edit?usp=sharing```
2. The link is in this format: <br> ```https://docs.google.com/spreadsheets/d/{DOCUMENT_KEY}/{PARAMETERS}```
3. The ```sheet_number``` is ```0``` is there is only one sheet in the document.

### Sheet Format

The sheet must to be in the below mentioned format.
| Hash          | Link           |
| ------------- |:--------------:|
| google        | ```www.google.com```|

## Sample Implementation

Explore the sample implementation of this project [here](https://dscin.ml/).
