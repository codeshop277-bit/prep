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

# Standardize data 
UPDATE layoff_staging SET company = TRIM(company)

Similary can clear white spaces for any columns

UPDATE layoff_staging SET industry = 'Crypto' WHERE industry LIKE 'Cryot%';
for updating/grouping duplicate values

TRIM(TRAILING '.' FROM country)

SELECT `date`, STR_TO_DATE(`date`, '%d%m%y')
UPDATE layoff_staging SET `date`= STR_TO_DATE(`date`, '%d%m%y')

ALTER TABLE layoff_staging MODIFY COLUMN `date` DATE

# NULL/BLANK Values

SELECT * FROM layout_staging WHERE total_laid_off IS NULL AND percentgae_laid_off IS NULL;

UPDATE layout_staging SET industry = NULL WHERE industry = ''

UPDATE layout_staging t1 JOIN layout_staging t2
ON t1.company  = t2.company SET t1.industry = t2.industry 
WHERE t1.industry is NULL AND t2.industry is NOT NULL;

DELETE FROM layout_staging WHERE total_laid_off IS NULL AND percentgae_laid_off IS NULL

ALTER TABLE layout_staging DROP COLUMN row_num;