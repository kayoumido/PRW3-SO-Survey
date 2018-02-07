import pandas as pd


def extract_used_technologies():
    """Used technologies extractor
    Extract the used technologies from the raw dataset
    and stores them in a new csv file.
    """

    wanted_cols = [
        "HaveWorkedLanguage",
        "HaveWorkedFramework",
        "HaveWorkedDatabase",
        "HaveWorkedPlatform",
    ]

    df = pd.read_csv('data/raw/survey_results_public.csv')
    # opening/creating output file
    output = open('data/processed/extracted_used_technologies.csv', 'w+')
    output.write('Respondent,Used Technologies\n')

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
    extract_used_technologies()
