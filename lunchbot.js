var request = require("request"),
	keys = require('../api_keys/slack_keys');
	
/* 
	The Slack webook URL is something you can get from inside the Slack app
	to send messages into a Slack channel. Since it's secret, I keep it 
	in a file outside of this directory structure so I don't accidentally 
	publish it on Github. I bring it abve as "keys" from a file
	called slack_keys.js. The structure of that file is:
	
	var SLACK_WEBHOOK_URL = 'my_consumer_key_url_goes_here';

	    module.exports.SLACK_WEBHOOK_URL = SLACK_WEBHOOK_URL;
*/
	
var lunchSpots = [
    {
        "location": "https://www.google.com/maps/dir/160+Varick+Street,+New+York,+NY/The+Kati+Roll+Company,+99+Macdougal+Street,+New+York,+NY+10012/@40.7282033,-74.0055599,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89c259f494b711c5:0xc0df2dedc3840f1e!2m2!1d-74.0053737!2d40.7267926!1m5!1m1!1s0x89c2599227e6cc1b:0xb4d5e12eaca2e69!2m2!1d-74.001022!2d40.729614",
        "restaurant": "The Kati Roll Company"
    },
    {
        "location": "https://www.google.com/maps/place/Better+Being+Underground/@40.730283,-74.005134,17z/data=!3m1!4b1!4m2!3m1!1s0x89c25992c2fb95f7:0x34aad58f90284bb7",
        "restaurant": "Better Being Underground"
    },
    {
        "location": "https://www.google.com/maps/place/Pret+A+Manger/@40.7281277,-74.0072268,17z/data=!4m5!1m2!2m1!1spret+hudson+street!3m1!1s0x0000000000000000:0xe0256475a78a7758",
        "restaurant": "Pret, Dig Inn and Hale & Hearty Soup"
    },
    {
        "location": "https://www.google.com/maps/place/Local+Caf%C3%A9/@40.727098,-74.002101,17z/data=!4m2!3m1!1s0x0:0x2e50fab2b9a903a4",
        "restaurant": "Local"
    },
    {
        "location": "https://www.google.com/maps/place/P.S.+BURGERS/@40.730222,-74.003361,17z/data=!3m1!4b1!4m2!3m1!1s0x89c2599259dcfa41:0xf5a95461a84621a3",
        "restaurant": "PS Burgers"
    },
    {
        "location": "https://www.google.com/maps/place/Sunrise+Mart/@40.723263,-74.002564,17z/data=!3m1!4b1!4m2!3m1!1s0x89c2598b8992258b:0x95f44791e2e5e7a1",
        "restaurant": "Sunrise Mart"
    },
    {
        "location": "https://www.google.com/maps/place/Amity+Hall/@40.7296908,-73.9992629,18z/data=!4m7!1m4!3m3!1s0x89c2598b8992258b:0x95f44791e2e5e7a1!2sSunrise+Mart!3b1!3m1!1s0x0000000000000000:0x27aab23b462c91ff",
        "restaurant": "Amity Hall"
    },
	{ 
		"location": "https://www.google.com/maps/dir/160+Varick+Street,+New+York,+NY/Hummus+Place,+71+7th+Avenue,+New+York,+NY+10014/@40.7295829,-74.0050478,17z/data=!4m14!4m13!1m5!1m1!1s0x89c259f494b711c5:0xc0df2dedc3840f1e!2m2!1d-74.0053737!2d40.7267926!1m5!1m1!1s0x89c259930ac4a1d7:0x55d741d4c2aa087f!2m2!1d-74.003385!2d40.732248!3e2",
		"restaurant": "The Hummus Place"
	},
	{
		"location": "https://www.google.com/maps/dir/160+Varick+Street,+New+York,+NY/Mamoun's,+Macdougal+Street,+New+York,+NY/@40.7285248,-74.0053048,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89c259f494b711c5:0xc0df2dedc3840f1e!2m2!1d-74.0053737!2d40.7267926!1m5!1m1!1s0x89c25991817682af:0xb8bb91865f939e8c!2m2!1d-74.000436!2d40.730257!3e2",
		"restaurant": "Mamoun's Falafel"
	},
	{
		"location": "https://www.google.com/maps/dir/160+Varick+Street,+New+York,+NY/Thelewala,+Macdougal+Street,+New+York,+NY/@40.7282488,-74.005454,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89c259f494b711c5:0xc0df2dedc3840f1e!2m2!1d-74.0053737!2d40.7267926!1m5!1m1!1s0x89c2599227759f0f:0x55970149a25eba9!2m2!1d-74.000657!2d40.729661!3e2",
		"restaurant": "THELEwala"
	}
];

// Pick a number, 0 to the length of the restaurant list less one
var pick = Math.floor( Math.random() * (lunchSpots.length - 1 ) );

var payload = {
	text: "Today, may I suggest *" + lunchSpots[pick].restaurant + "*. It's <" + lunchSpots[pick].location + "|here>.",
	icon_emoji: ":poultry_leg:",
	username: "Lunch Bot"
	// channel: "#random"
};

var options = {
	url: keys.SLACK_WEBHOOK_URL,
	method: 'POST',
	body: payload,
	json: true
};

// Send the webhook
request(options, function (error, response, body){
	if (!error && response.statusCode == 200) {
		console.log(body);
	} else {
		console.log(error);
	}
});
