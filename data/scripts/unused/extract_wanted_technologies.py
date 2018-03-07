import pandas as pd


def extract_wanted_technologies():
    """Wanted to use technologies exractor
    Extract the wanted to use technologies from the raw dataset
    and stores them in a new csv file.
    """

    wanted_cols = [
        "WantWorkLanguage",
        "WantWorkFramework",
        "WantWorkDatabase",
        "WantWorkPlatform",
    ]

    df = pd.read_csv('data/raw/survey_results_public.csv')
    # opening/creating output file
    output = open('data/processed/extracted_wanted_technologies.csv', 'w+')
    output.write('Respondent,Wanted Technologies\n')

    for index, row in df.iterrows():
        respondent = row['Respondent']

        for col in wanted_cols:
            techs = str(row[col]).split(';')

            for tech in techs:
                if tech != "nan":
                    output.write(
                        str(respondent) + ',' + str(tech).lstrip() + '\n'
                    )


if __name__ == "__main__":
    extract_wanted_technologies()
