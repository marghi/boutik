package ma.ensa.boutik.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.logging.Logger;
import org.apache.log4j.helpers.OptionConverter;
public class GlobalUtil {
	private static final  String	UPLOAD_LOGO_SAVE_DIRECTORY_KEY = "UPLOAD_LOGO_SAVE_DIRECTORY";
	private static final String	UPLOAD_LOGO_LOAD_DIRECTORY_KEY = "UPLOAD_LOGO_LOAD_DIRECTORY";
	private static final Logger LOGGER = Logger.getLogger(GlobalUtil.class.getName());
	private static final String UPLOAD_ARIAL_TTF_LOAD_DIRECTORY_KEY = "UPLOAD_ARIAL_TTF_LOAD_DIRECTORY";

	// Dossier d'upload
	private static String uploadLogoSaveDirectory;
	private static String uploadLogoLoadDirectory;
	private static String uploadArialTtfLoadDirectory;
	
	static {
		loadProperties();
	}
	
	/**
	 * Charge les paramètres du serveur de messagerie
	 */
	private static void loadProperties() {
		InputStream stream = GlobalUtil.class.getResourceAsStream("/global.properties");
		if (stream != null)	{
			Properties properties = new Properties();
			try {
				properties.load(stream);
				setUploadLogoSaveDirectory(OptionConverter.substVars(properties.getProperty(UPLOAD_LOGO_SAVE_DIRECTORY_KEY),null));
				setUploadLogoLoadDirectory(OptionConverter.substVars(properties.getProperty(UPLOAD_LOGO_LOAD_DIRECTORY_KEY),null));
				setUploadArialTtfLoadDirectory(OptionConverter.substVars(properties.getProperty(UPLOAD_ARIAL_TTF_LOAD_DIRECTORY_KEY),null));
			} catch (IOException e) {
				LOGGER.severe("Erreur au chargement des propriétés");
			}
			try {
				stream.close();
			} catch (IOException e) {
				LOGGER.severe("Erreur au chargement des propriétés");
			}
		}
		else	{
			LOGGER.severe("Fichier de configuration global non trouvé");
		}
	}

	public static void setUploadLogoSaveDirectory(
			String uploadLogoSaveDirectory) {
		GlobalUtil.uploadLogoSaveDirectory = uploadLogoSaveDirectory;
	}

	public static String getUploadLogoSaveDirectory() {
		return uploadLogoSaveDirectory;
	}

	public static void setUploadLogoLoadDirectory(
			String uploadLogoLoadDirectory) {
		GlobalUtil.uploadLogoLoadDirectory = uploadLogoLoadDirectory;
	}

	public static String getUploadLogoLoadDirectory() {
		return uploadLogoLoadDirectory;
	}

	public static String getUploadArialTtfLoadDirectory() {
		return uploadArialTtfLoadDirectory;
	}

	public static void setUploadArialTtfLoadDirectory(
			String uploadArialTtfLoadDirectory) {
		GlobalUtil.uploadArialTtfLoadDirectory = uploadArialTtfLoadDirectory;
	}

}
