export function logger(technologie) {
    // log system
    try {
        // $.getJSON("../../api.json", function (json) {
            $.ajax({
                type: "POST",
                // url: `${log_api_config.api.projects_url}/stackoverflow_survey`,
                url: `http://172.17.102.83/api/projects/stackoverflow_survey`,
                contentTypeString: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {
                    data: technologie
                }
            });
        // });
    }
    catch (err) {
        console.error("Log API inaccessible");
    }
}
