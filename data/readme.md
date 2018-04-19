# data

## Raw data

_Every year, Stack Overflow conducts a massive survey of people on the site, covering all sorts of information like programming languages, salary, code style and various other information. This year, they amassed more than 64,000 responses fielded from 213 countries._

Raw data can be found in the [raw](raw/) folder in which you will find two csv files.

| Files                     |                                                                    |
| ------------------------- | ------------------------------------------------------------------ |
| survey_results_public.csv | All the answers to the survey                                      |
| survey_results_schema.csv | The questions that were asked. But it isn't used for this analysis |

| URI                                                 | Description                                                              | Date       |
| --------------------------------------------------- | ------------------------------------------------------------------------ | ---------- |
| https://www.kaggle.com/stackoverflow/so-survey-2017 | List with the results from the survey and the questions that were asked. | 22.12.2017 |

## Processed data

The processed data can be found in the processed [folder](processed/) in which you will find two csv files.

| CSV                        | Description                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| extracted_technologies.csv | This file contains the different technologies used by the developers that filled the survey.                                            |
| survey_results_clean.csv   | This file contains pretty much the same as its raw version the only difference being is that the used technologies are removed from it. |

## Study design

The raw data was found on [Kaggle](https://kaggle.com/)

### Kaggle

_The Home of Data Science & Machine Learning_

Kaggle is a platform from which you can find a wide range of dataset to play with of learn data science.

## Code book

### raw

Here is a list of the columns in the raw data that project will be using :

| Variable            | Unit   |
| ------------------- | ------ |
| HaveWorkedLanguage  | String |
| HaveWorkedFramework | String |
| HaveWorkedDatabase  | String |
| HaveWorkedPlatform  | String |
| WantWorkLanguage    | String |
| WantWorkFramework   | String |
| WantWorkDatabase    | String |
| WantWorkPlatform    | String |

### Processed

#### extracted_used_technologies.csv

| Variable   | Unit    |
| ---------- | ------- |
| Technology | String  |
| Count      | Numeric |

#### extracted_used_technologies.csv

| Variable        | Unit    |
| --------------- | ------- |
| Used Technology | String  |
| Used Technology | String  |
| Count           | Numeric |

## Instruction list

These instructions will walk you trough the steps to get from **raw** to **processed**.

### Prerequisites

You will need to have `python 3.6.3` or higher installed on your machine.

### Lets go

All you need to do is execute the scripts [extract_used_technologies.py](scripts/extract_used_technologies.py) and [extract_wanted_technologies.py](scripts/extract_wanted_technologies.py).

```
# scripts are executed form the project root
$ python3 data/scripts/extract_technologies.py
$ python3 data/scripts/extract_technologies.py
```

You will now find the processed data files in the processed [folder](processed/)
