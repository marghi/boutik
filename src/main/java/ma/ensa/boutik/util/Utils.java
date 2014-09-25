package ma.ensa.boutik.util;

import java.io.File;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.web.multipart.MultipartFile;
/**
 * 
 * @author nlakhouit
 *
 */
public class Utils {
	/**
	 * convertir une date en chaine
	 * 
	 * @param dateConvertir
	 * @return return une chaine de format JJ/MM/AAAA
	 */
	public static String getEncodedPassword(String key) throws NoSuchAlgorithmException {
		byte[] uniqueKey = key.getBytes();
		byte[] hash = null;
		hash = MessageDigest.getInstance("MD5").digest(uniqueKey);
		StringBuffer hashString = new StringBuffer();
		for ( int i = 0; i < hash.length; ++i ) {
		String hex = Integer.toHexString(hash[i]);
		if ( hex.length() == 1 ) {
		hashString.append('0');
		hashString.append(hex.charAt(hex.length()-1));
		} else {
		hashString.append(hex.substring(hex.length()-2));
		}
		}
		return hashString.toString();
		}
	public static String convertirDateEnChaine(Date dateConvertir) {
		String dateEnChaine = "";
		SimpleDateFormat formatDateJour = new SimpleDateFormat("dd/MM/yyyy");
		if (null != dateConvertir) {
			dateEnChaine = formatDateJour.format(dateConvertir);
		}
		return dateEnChaine;
	}
	
	/**
	 * permet de charger le fichier de l'image
	 * @param logo
	 * @return
	 */
	public static boolean uploadFile(MultipartFile logo,Logger logger) {

			if (logo == null || logo.isEmpty()) {
				return true;
			}

			if (!logo.getOriginalFilename().endsWith(".jpg")
					&& !logo.getOriginalFilename().endsWith(".png")
					&& !logo.getOriginalFilename().endsWith(".jpeg")
					&& !logo.getOriginalFilename().endsWith(".gif")
					&& !logo.getOriginalFilename().endsWith(".JPG")
					&& !logo.getOriginalFilename().endsWith(".PNG")
					&& !logo.getOriginalFilename().endsWith(".JPEG")
					&& !logo.getOriginalFilename().endsWith(".GIF")) {
				return false;
			}

			try {
				String chemin = GlobalUtil.getUploadLogoSaveDirectory();
				logger.debug("fichier d'upload : " + chemin);
				if (!new File(chemin).exists()) {
					new File(chemin).mkdir();
				}
				File savedFile = new File(chemin, logo.getOriginalFilename());
				logo.transferTo(savedFile);
			} catch (Exception e) {
				logger.debug("Erreur lors de l'ecriture du logo a uploader", e);
				return false;
			}

			return true;
	}
	
	
	/**
	 * convertir une chaine en date. 
	 * 
	 * @param dateConvertir
	 * @return return une Date de format JJ/MM/AAAA
	 */
	public static Date convertirChaineEnDate(String dateEnChaine) {
		SimpleDateFormat formatDateJour = new SimpleDateFormat("dd/MM/yyyy");
		Date dateConvertir=null;
		if (null != dateEnChaine) {
			try {
				dateConvertir=formatDateJour.parse(dateEnChaine);
			} catch (ParseException e) {
				
				return null;
			}
		}
		return dateConvertir;
	}	

}
