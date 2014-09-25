//package ma.ensa.boutik.util;
//
//import java.util.List;
//
//import fr.norsys.naf.impressionCheque.web.dto.JSonDto;
//
//
///**
// * classe utilitaire permettant de gérer le code JSon
// * 
// * 
// */
//public final class JSonUtil {
//
//	/**
//	 * convertit le résultat d'une recherche d'objet JSon (qui implemente
//	 * JSonDto) en une réponse pour un datatable
//
//	 * @param nbTotalData
//	 *            le nombre total de données (pour la pagination)
//	 * @param data
//	 *            la liste des données
//	 * @return le code JSon
//	 */
//	public static String construireTableau(int nbTotalData,
//			List<? extends JSonDto> data) {
//		StringBuffer jSonresponse = new StringBuffer();
//		// ouverture du code JSon
//		jSonresponse.append("{ ");
//		// parametre TotalDisplayRecords
//		jSonresponse.append("  \"iTotalDisplayRecords\":");
//		jSonresponse.append(nbTotalData);
//		// parametre aaData (donnee a affichée)
//		jSonresponse.append(",  \"aaData\":");
//		jSonresponse.append("[");
//		if (data != null && data.size() > 0) {
//			
//			boolean first = true;
//			for (JSonDto jSonDto : data) {
//				if(!first){
//					jSonresponse.append(", ");
//				}
//				
//				jSonresponse.append(jSonDto.toJSon());
//				first = false;
//			}
//		}
//		jSonresponse.append("]");
//		// fermeture du code JSon
//		jSonresponse.append("}");
//
//		return jSonresponse.toString();
//	}
//
// }