<?php
/**
 * Convert CSV to JSON
 */
header("Content-type: application/json");


$pathtofiles     = "../data/processed/";
$usedtechsfile   = "extracted_used_technologies.csv";
$wantedtechsfile = "extracted_wanted_technologies.csv";

$finaldata = [];
// open csv
if (($fp = fopen("$pathtofiles$usedtechsfile", "r")) !== false) {
    $i = -1;
    // go trough data
    while (($data = fgetcsv($fp, 1000, ",")) !== false) {
        if ($i < 0) {
            $i = 0;
            continue;
        }

        $index = "";
        $count = "";
        // loop thourgh line data
        foreach ($data as $key => $value) {
            // fetch the wanted data
            if ($key === 0) $index = $value;
            if ($key === 1) $count = $value;
            // write in array only when we have all the data
            if (!empty($index) and !empty($count))
                $finaldata[$index]["count"] = $count;
        }
    }
    fclose($fp);
}

if (($fp = fopen("$pathtofiles$wantedtechsfile", "r")) !== false) {
    $i = -1;
    // go trough data
    while (($data = fgetcsv($fp, 1000, ",")) !== false) {

        if ($i < 0) {
            $i = 0;
            continue;
        }

        $index  = "";
        $wanted = "";
        $count  = "";
        // loop thourgh line data
        foreach ($data as $key => $value) {
            // fetch the wanted data
            if ($key == 0) $index = $value;
            if ($key == 1) $wanted = $value;
            if ($key == 2) $count = $value;
            // write in array only when we have all the data
            if (!empty($index) and !empty($wanted) and !empty($count))
                $finaldata[$index]["Wanted Technologies"][$wanted] = $count;
        }
    }
    fclose($fp);
}

echo json_encode($finaldata);
