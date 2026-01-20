# Data CLeaning projects

# Remove Duplicates
# Standarize data - Spelling mistakes
# Null values or blank values
# Remove irrelevant columns

Create staging(duplicate) table beofre working on it
 USe a partition on all columns which gives us the duplicates row_num >1

 WITH duplicates(
SELECT *,
ROW_NUMBER() OVER(PARTITION BY 
company,location,industry,total_laid_off,percentage_laid_off,
`date`,stage, country, funds_raised_millions) AS row_num
FROM layoffs_staging 
)
SELECT * FROM duplicates WHERE row_num >1;
# and delete
DELETE * FROM duplicates WHERE row_num >1;

Or create one more table staging2 and assign row_num as column while table creation.
This will ensure duplicates will have row_num>1 then delete it.