import pandas as pd


def extract_wanted_technologies():
    """Wanted to use technologies exractor
    Extract the wanted to use technologies for certain used technologies
    from the raw dataset and stores them in a new csv file.
    """

    wanted_cols = {
        "HaveWorkedLanguage": "WantWorkLanguage",
        "HaveWorkedFramework": "WantWorkFramework",
        "HaveWorkedDatabase": "WantWorkDatabase",
        "HaveWorkedPlatform": "WantWorkPlatform",
    }
    df = pd.read_csv('data/raw/survey_results_public.csv')
    # opening/creating output file
    output = open('data/processed/extracted_wanted_technologies.csv', 'w+')
    output.write('Used Technology,Wanted Technology,Count\n')

    technologies = {}

    for index, row in df.iterrows():

        for used, wanted in wanted_cols.items():
            # split used techs (utechs) and wanted techs (wtechs)
            utechs = str(row[used]).split(';')
            wtechs = str(row[wanted]).split(';')

            for utech in utechs:
                if utech == 'nan':
                    continue

                for wtech in wtechs:
                    technologies[utech] = technologies.get(utech, {})
                    technologies[utech][wtech] = technologies[utech].get(
                        wtech, 0) + 1

    for utech, wtechs in technologies.items():
        for wtech, count in wtechs.items():
            if wtech != 'nan':
                output.write(
                    utech.lstrip() +
                    ',' +
                    wtech.lstrip() +
                    ',' +
                    str(count) + '\n'
                )


if __name__ == "__main__":
    extract_wanted_technologies()
