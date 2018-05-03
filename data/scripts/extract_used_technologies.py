import pandas as pd


def extract_used_technologies():
    """Used technologies extractor
    Extract the used technologies from the raw dataset
    and stores them in a new csv file.

    It's import to execute this script at the root of the project.
    Otherwise the paths to the different csv files won't work.
    If you're stubborn you can change the paths.
    """

    wanted_cols = [
        "HaveWorkedLanguage",
        "HaveWorkedFramework",
        "HaveWorkedDatabase",
        "HaveWorkedPlatform",
    ]
    # open raw data
    df = pd.read_csv('data/raw/survey_results_public.csv')
    # opening/creating output file
    output = open('data/processed/extracted_used_technologies.csv', 'w+')
    output.write('Technology,Count\n')

    technologies = {}

    for index, row in df.iterrows():

        for col in wanted_cols:
            # split string of techs into array
            techs = str(row[col]).split(';')

            # count different techs
            for tech in techs:
                tech = tech.lstrip()
                # skip nan
                if tech != "nan":
                    technologies[tech] = technologies.get(tech, 0) + 1

    # write techs in output file
    for technologie, count in technologies.items():
        output.write(
            technologie + ',' + str(count) + '\n'
        )


if __name__ == "__main__":
    extract_used_technologies()
