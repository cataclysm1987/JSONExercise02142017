function TestGetJSON() {$.getJSON("users.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push("<li id='" + key + "'>" + val + "</li>");
    });

    $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
    }).appendTo("body");
});
}


function AccessUserName() {$.getJSON("users.js", function (json) {
    console.log("JSON Data: " + json.users[3].name);
});}