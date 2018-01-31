import pandas as pd


def extract_respondents():
    """Respondent id extractor
    Extract the id of the respondents from the raw dataset
    and stores them in a new csv file.
    """
    data = pd.read_csv('data/raw/survey_results_public.csv')

    # opening/creating output file
    output = open('data/processed/extracted_respondents.csv', 'w+')
    # write header
    output.write('Respondent\n')

    # write respondents id to file
    for respondent in data['Respondent']:
        output.write(str(respondent) + '\n')


if __name__ == "__main__":
    extract_respondents()
