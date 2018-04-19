#  Contributing Guide



Before submitting any work, please take some time to read the following.

* [Code of Conduct](../.github/CODE_OF_CONDZCT.md)
* [Issue Reporting](#issue-reporting)
* [Pull Request](#pull-request)
* [Development Setup](#development-setup)
* [Project Structure](#project-structure)



## Issue Reporting

Nothing special to do. You can simply use [github issues](https://github.com/kayoumido/PRW3-SO-Survey).



## Pull Request

* The `master` branch is a snapshot of the latest stable version. Any work should be done in a dedicated branch and then merged into `develop`.
* Before doing a **PR**, make sure that you've solved any conflicts by merging the latest version of `develop` against your branch.



## Development Setup

You will need [Python 3.6](https://www.python.org/),  [Vagrant](https://www.vagrantup.com/) and [Composer](https://getcomposer.org/).

Once you've cloned the repo, run :

```bash
$ composer update
```

If you wish to work on the python scripts, you'll need to install [pandas](https://pandas.pydata.org/):

```bash
$ pip install pandas
```

You can now, run and work on the project:

```bash
$ vagrant up
```

Your app is accessible under [192.168.10.12](192.168.10.1) or you can add the following to your **hosts** file and access it under [so.datalab.io](http://so.datalab.io/).

```
192.168.10.12 so.datalab.io
```



## Project Structure

* **data** : 
  * raw : contains the raw data.
  * processed : contains the processed data.
  * scripts : contains the scripts that will process the raw data.
* **src** : contains the source code.
  * server : contains code related to server-side rendering.
  * public : contains the runtime code. You'll most likely pass most of your time here.
* **index.html** : point of entry of the application.