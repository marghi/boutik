/*
'*********** 
' Devise=0   aucune 
'       =1   Euro � 
'       =2   Dollar $ 
' Langue=0   Français 
'       =1   Belgique 
'       =2   Suisse 
'*********** 
' Conversion limit�e � 999 999 999 999 999 ou 9 999 999 999 999,99 
' si le nombre contient plus de 2 d�cimales, il est arrondit � 2 d�cimales 
*/
function ConvNumberLetter_fr(Nombre, bCheckFloat) {	
	var strNombre = new String(Nombre) ;
	var TabNombre = new Array() ;
	var strLetter = new String() ;
	var strLetterZero = new String();
	
	
	if(isNaN(parseFloat(Nombre))) return "";
	
	if(bCheckFloat) {
		TabNombre = strNombre.split(".") ;
		if(TabNombre.length > 2 || TabNombre.length <= 0) return "" ;
		for(var i = 0; i < TabNombre.length; i++) {
			
			if(i == 0){ 
				strLetter = strLetter + ConvNumberLetter(parseFloat(TabNombre[0]), 0, 0) ;
				strLetter= strLetter +"DIRHAMS";
			}
			else{
				
				if(parseFloat(TabNombre[1])<9 && parseFloat(TabNombre[1])>0 ){
					tailTab = TabNombre[1].length;
					
					
					if(tailTab == 2){
						TabNombre[1]=TabNombre[1];
					}else{
						TabNombre[1]=TabNombre[1]*10;
					}
					
					
					
					strLetter = strLetter +' ET ' +ConvNumberLetter(parseFloat(TabNombre[1]), 0, 0)+"CENTIMES";
				}else{
					strLetter = strLetter +' ET '+ ConvNumberLetter(parseFloat(TabNombre[1]), 0, 0)+"CENTIMES" ;
				}
				
				
				//strLetter = strLetter +' et '+ ConvNumberLetter(parseFloat(TabNombre[i]), 0, 0)+"Centimes" ;
			}
			if(parseFloat(TabNombre[1])==0){
				strLetter= strLetterZero+ConvNumberLetter(parseFloat(TabNombre[0]), 0, 0)+"DIRHAMS";	
			}
		}
		return strLetter ;
	}
	else {
		strLetter = ConvNumberLetter(Nombre, 1, 0) ;
		return strLetter ;
	}
}

function ConvNumberLetter(Nombre, Devise, Langue) {
    var dblEnt, byDec ; 
    var bNegatif; 
    var strDev = new String();
	var strCentimes = new String();
    
    if( Nombre < 0 ) {
        bNegatif = true;
        Nombre = Math.abs(Nombre);
    }
    dblEnt = parseInt(Nombre) ;
    byDec = parseInt((Nombre - dblEnt) * 100) ;
    if( byDec == 0 ) {
        if (dblEnt > 999999999999999) {
            return "#TROPGRAND" ;            
        }
	}
    else {
        if (dblEnt > 9999999999999.99) {
            return "#TROPGRAND" ;            
        }    
	}
	switch(Devise) {
        case 0 :
            if (byDec > 0) strDev = " VIRGULE" ;
			break;
        case 1 :
            strDev = " EURO" ;
            if (byDec > 0) strCentimes = strCentimes + " CENTS" ;
			break;
        case 2 :
            strDev = " DOLLAR" ;
            if (byDec > 0) strCentimes = strCentimes + " CENT" ;
			break;
	}
    if (dblEnt > 1 && Devise != 0) strDev = strDev + "S" ;
    
	var NumberLetter = ConvNumEnt(parseFloat(dblEnt), Langue) + strDev + " " + ConvNumDizaine(byDec, Langue) + strCentimes ;
	return NumberLetter;
}

function ConvNumEnt(Nombre, Langue) {
    var byNum, iTmp, dblReste ;
    var StrTmp = new String();
    var NumEnt ;
    iTmp = Nombre - (parseInt(Nombre / 1000) * 1000) ;
    NumEnt = ConvNumCent(parseInt(iTmp), Langue) ;
    dblReste = parseInt(Nombre / 1000) ;
    iTmp = dblReste - (parseInt(dblReste / 1000) * 1000) ;
    StrTmp = ConvNumCent(parseInt(iTmp), Langue) ;
    switch(iTmp) {
        case 0 :
			break;
        case 1 :
            StrTmp = "MILLE " ; 
			break;
        default : 
            StrTmp = StrTmp + " MILLE " ;
    }
    NumEnt = StrTmp + NumEnt ;
    dblReste = parseInt(dblReste / 1000) ;
    iTmp = dblReste - (parseInt(dblReste / 1000) * 1000) ;
    StrTmp = ConvNumCent(parseInt(iTmp), Langue) ;
    switch(iTmp) {
        case 0 :
			break;
        case 1 :
            StrTmp = StrTmp + " MILLION " ;
			break;
        default : 
            StrTmp = StrTmp + " MILLIONS " ;
    }
    NumEnt = StrTmp + NumEnt ;
    dblReste = parseInt(dblReste / 1000) ;
    iTmp = dblReste - (parseInt(dblReste / 1000) * 1000) ;
    StrTmp = ConvNumCent(parseInt(iTmp), Langue) ;
	switch(iTmp) {
        case 0 :
			break;
        case 1 :
            StrTmp = StrTmp + " MILLIARD " ;
			break;
        default : 
            StrTmp = StrTmp + " MILLIARDS " ;
    }
    NumEnt = StrTmp + NumEnt ;
    dblReste = parseInt(dblReste / 1000) ;
    iTmp = dblReste - (parseInt(dblReste / 1000) * 1000) ;
    StrTmp = ConvNumCent(parseInt(iTmp), Langue) ;
   	switch(iTmp) {
        case 0 :
			break;
        case 1 :
            StrTmp = StrTmp + " BILLION " ;
			break;
        default : 
            StrTmp = StrTmp + " BILLIONS " ;
    }
    NumEnt = StrTmp + NumEnt ;
 	return NumEnt;    
}

function ConvNumDizaine(Nombre, Langue) {
    var TabUnit, TabDiz ;
    var byUnit, byDiz ;
    var strLiaison = new String() ;
    
    TabUnit = Array("", "UN", "DEUX", "TROIS", "QUATRE", "CINQ", "SIX", "SEPT",
        "HUIT", "NEUF", "DIX", "ONZE", "DOUZE", "TREIZE", "QUATORZE", "QUINZE",
        "SEIZE", "DIX-SEPT", "DIX-HUIT", "DIX-NEUF") ;
    TabDiz = Array("", "", "VINGT", "TRENTE", "QUARANTE", "CINQUANTE",
        "SOIXANTE", "SOIXANTE", "QUATRE-VINGT", "QUATRE-VINGT") ;
    if (Langue == 1) {
        TabDiz[7] = "SEPTANTE" ;
        TabDiz[9] = "NONANTE" ;
	}
    else if (Langue == 2) {
        TabDiz[7] = "SEPTANTE" ;
        TabDiz[8] = "HUITANTE" ;
        TabDiz[9] = "NONANTE" ;
    }
    byDiz = parseInt(Nombre / 10) ;
    byUnit = Nombre - (byDiz * 10) ;
    strLiaison = "-" ;
    if (byUnit == 1) strLiaison = " ET " ;
    switch(byDiz) {
        case 0 :
            strLiaison = "" ;
			break;
        case 1 :
            byUnit = byUnit + 10 ;
            strLiaison = "" ;
			break;
        case 7 :
            if (Langue == 0) byUnit = byUnit + 10 ;
			break;
        case 8 :
            if (Langue != 2) strLiaison = "-" ;
			break;
        case 9 :
            if (Langue == 0) {
                byUnit = byUnit + 10 ;
                strLiaison = "-" ;
            }
			break;
    }
    var NumDizaine = TabDiz[byDiz] ;
    if (byDiz == 8 && Langue != 2 && byUnit == 0) NumDizaine = NumDizaine + "S" ;
    if (TabUnit[byUnit] != "") {
        NumDizaine = NumDizaine + strLiaison + TabUnit[byUnit] ;
	}
    else {
        NumDizaine = NumDizaine ;
    } 
	return NumDizaine;
}

function ConvNumCent(Nombre, Langue) {
    var TabUnit ;
    var byCent, byReste ;
    var strReste = new String() ;
    var NumCent;
    TabUnit = Array("", "UN", "DEUX", "TROIS", "QUATRE", "CINQ", "SIX", "SEPT","HUIT", "NEUF", "DIX") ;
    
    byCent = parseInt(Nombre / 100) ;
    byReste = Nombre - (byCent * 100) ; 
    strReste = ConvNumDizaine(byReste, Langue) 
    switch(byCent) {
        case 0 :
            NumCent = strReste ;
			break;
        case 1 :
            if (byReste == 0)
                NumCent = "CENT" ;
            else 
                NumCent = "CENT " + strReste ;
            break;
        default :
            if (byReste == 0)
                NumCent = TabUnit[byCent] + " CENTS" ;
            else 
                NumCent = TabUnit[byCent] + " CENT " + strReste ;
	}
	return NumCent;
}