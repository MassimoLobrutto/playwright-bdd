import { databaseName, queryDb } from '../../helper/utils/sqlDb';
import { Given } from '../../fixtures/fixtures';
import { logger } from '../../helper/logger/logger';

Given('I query db and print results', async () => {
  const result1 = await queryDb(databaseName.shieldfaculty, `SELECT * FROM facultydetails`);
  logger.info(`First faculty firstname: ${result1[0].firstname}`);
  logger.info(`First faculty surname: ${result1[0].surname}`);
  const result2 = await queryDb(databaseName.shieldstudent, `SELECT * FROM studentdetails`);
  logger.info(`First student surname: ${result2[0].surname}`);
  logger.info(`First student firstname: ${result2[0].firstname}`);
});
