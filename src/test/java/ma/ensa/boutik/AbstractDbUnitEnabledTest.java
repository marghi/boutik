package ma.ensa.boutik;

import java.io.InputStreamReader;
import java.io.Reader;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.dbunit.database.IDatabaseConnection;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.xml.XmlDataSet;
import org.dbunit.ext.hsqldb.HsqldbConnection;
import org.dbunit.operation.DatabaseOperation;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/layer-dao-test.xml",
		"/layer-datasource-test.xml", "/layer-env-test.xml" })
public abstract class AbstractDbUnitEnabledTest extends
AbstractTransactionalJUnit4SpringContextTests {

	@Resource
	DataSource dataSource;

	private static boolean setup;

	@Before
	public void setUpDbUnit() throws Exception {
		if (!setup) {
			IDatabaseConnection dbUnitConnection = new HsqldbConnection(
					this.dataSource.getConnection(), null);
			String resourceName = this.getXmlDataSetResourceName();
			Reader reader = new InputStreamReader(this.getClass()
					.getResourceAsStream(resourceName));
			IDataSet dataSet = new XmlDataSet(reader);
			DatabaseOperation.CLEAN_INSERT.execute(dbUnitConnection, dataSet);
			dbUnitConnection.close();
			setup = true;
		}
	}

	/**
	 * Indique le chemin du fichier de données DBUnit au format XMLDataSet
	 */
	protected abstract String getXmlDataSetResourceName();

}