package ma.ensa.boutik.dao;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import ma.ensa.boutik.AbstractDbUnitEnabledTest;
import ma.ensa.boutik.domain.Client;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * 
 * @author dmarghi
 *
 */
public class ClientDaoTest extends AbstractDbUnitEnabledTest {

	@Autowired
	private ClientDao clientDao;

	@Override
	protected String getXmlDataSetResourceName() {
		return "/data.xml";
	}

	/**
	 * chercher un user par sa cle primaire
	 * 
	 * @throws Exception
	 */
	@Test
	public void testFindByPk() throws Exception {
		Client client = clientDao.findByPk("aa@aa.aa");
		assertNotNull(client);
		assertEquals("aaa", client.getNom());
	}

	/**
	 * merge un client
	 * 
	 * @throws Exception
	 */
	@Test
	public void testMergeClient() throws Exception {
		Client client = new Client();
		client.setAdresse("aa");
		client.setCp("cp");
		client.setEmail("ab@ab.ab");
		client.setEnabled(true);
		client.setRole("ROLE_USER");
		client = this.clientDao.merge(client);
		assertNotNull(client);
		assertEquals("aa", client.getAdresse());

	}

}
