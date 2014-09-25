package ma.ensa.boutik.controller;

import java.security.NoSuchAlgorithmException;

import ma.ensa.boutik.domain.Client;
import ma.ensa.boutik.service.ClientService;
import ma.ensa.boutik.util.Utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Le controlleur principale.
 */
@Controller("HomeController")
@RequestMapping("/")
public class HomeController {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(HomeController.class);

	@Autowired
	private ClientService clientService;

	/**
	 * Acces a la page d'accuiel via tiles.
	 * 
	 * @return
	 */
	@RequestMapping(value = "")
	public ModelAndView home() {
		LOGGER.info("bienvenu dans la page d'accuiel !");
		return new ModelAndView(".index");
	}

	@RequestMapping(value = "login")
	public ModelAndView login() {
		LOGGER.info("login created!");
		return new ModelAndView(".login");
	}

	@RequestMapping(value = "afficherFormulaireCreationCompteUtilisateur")
	public ModelAndView afficherFormulaireCreationCompteUtilisateur() {
		ModelAndView modelAndView = new ModelAndView(".user.formulaireCreation");
		return modelAndView;
	}

	@RequestMapping(value = "frwdmdpforgoted")
	public ModelAndView frwdMdpForgoted() {
		ModelAndView modelAndView = new ModelAndView(".mdpforgeted");
		return modelAndView;
	}

	@RequestMapping(value = "actionEnregistrerNouveauCompteUtilisateur", method = RequestMethod.POST)
	public ModelAndView actionEnregistrerNouveauCompteUtilisateur(@ModelAttribute("client") Client client) {
		ModelAndView modelAndView = new ModelAndView(".login");
		LOGGER.info(client.getEmail());
		try {
			client.setPassword(Utils.getEncodedPassword(client.getPassword()));
			client.setEnabled(true);
			client.setRole("ROLE_USER");
			this.clientService.merge(client);
			LOGGER.info(client.getPassword());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		modelAndView.addObject("message","L'inscription effectuer avec succes ! ");
		return modelAndView;
	}
}
