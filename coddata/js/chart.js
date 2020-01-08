var chartData = {
    "barCircleWeb": [{
            "index": 0.3,
            "value": 8,
            "fill": "#231F20",
            "label": "白羊"
        },
        {
            "index": 0.4,
            "value": 12,
            "fill": "#403437",
            "label": "处女"
        },
        {
            "index": 0.5,
            "value": 8,
            "fill": "#53363C",
            "label": "金牛"
        },
        {
            "index": 0.6,
            "value": 9,
            "fill": "#5E2C3A",
            "label": "巨蟹"
        },
        {
            "index": 0.7,
            "value": 12,
            "fill": "#660E34",
            "label": "摩羯"
        },
        {
            "index": 0.8,
            "value": 13,
            "fill": "#7D3A4D",
            "label": "射手"
        },
        {
            "index": 0.9,
            "value": 10,
            "fill": "#96606B",
            "label": "狮子"
        },
        {
            "index": 1,
            "value": 14,
            "fill": "#B28A91",
            "label": "双鱼"
        },
        {
            "index": 1.1,
            "value": 5,
            "fill": "#D3BCBF",
            "label": "双子"
        },
        {
            "index": 1.2,
            "value": 5,
            "fill": "#EDE4E5",
            "label": "水瓶"
        },
        {
            "index": 1.3,
            "value": 11,
            "fill": "#EDE4E5",
            "label": "天秤"
        },
        {
            "index": 1.4,
            "value": 12,
            "fill": "#EDE4E5",
            "label": "天蝎"
        }
    ]
};

function drawBarCircleChart(data, target, values, labels) {
    var w = 362,
        h = 362,
        size = data[0].value * 1.15,
        radius = 200,
        sectorWidth = .1,
        radScale = 25,
        sectorScale = 1.45,
        target = d3.select(target),
        valueText = d3.select(values),
        labelText = d3.select(labels);


    var arc = d3.svg.arc()
        .innerRadius(function (d, i) {
            return (d.index / sectorScale) * radius + radScale;
        })
        .outerRadius(function (d, i) {
            return ((d.index / sectorScale) + (sectorWidth / sectorScale)) * radius + radScale;
        })
        .startAngle(Math.PI)
        .endAngle(function (d) {
            return Math.PI + (d.value / size) * 2 * Math.PI;
        });

    var path = target.selectAll("path")
        .data(data);

    //TODO: seperate color and index from data object, make it a pain to update object order
    path.enter().append("svg:path")
        .attr("fill", function (d, i) {
            return d.fill
        })
        .attr("stroke", "#D1D3D4")
        .transition()
        .ease("elastic")
        .duration(1000)
        .delay(function (d, i) {
            return i * 100
        })
        .attrTween("d", arcTween);

    valueText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x: 50,
            y: function (d, i) {
                return i * 14
            },
            "text-anchor": "end"
        })
        .text(function (d, i) {
            return data[i].value
        });

    labelText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x: 0,
            y: function (d, i) {
                return i * 14
            }
        })
        .text(function (d, i) {
            return data[i].label
        });

    function arcTween(b) {
        var i = d3.interpolate({
            value: 0
        }, b);
        return function (t) {
            return arc(i(t));
        };
    }
}

// Animation Queue
setTimeout(function () {
    drawBarCircleChart(chartData.barCircleWeb, "#circleBar-web-chart", "#circleBar-web-values", "#circleBar-web-labels")
}, 500);

d3.select("#circleBar-web-icon")
    .transition()
    .delay(500)
    .duration(500)
    .attr("opacity", "1");
d3.select("#circleBar-web-text")
    .transition()
    .delay(750)
    .duration(500)
    .attr("opacity", "1");

d3.select("#circleBar-web-clipLabels")
    .transition()
    .delay(600)
    .duration(1250)
    .attr("height", "150");