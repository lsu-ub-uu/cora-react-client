import { Record } from './GenericDefinitions';

type Name = {
	familyName: string;
	givenName: string;
};

type ExternalUrl = {
	linkTitle: string;
	URL: string;
};

type Biography = {
	biography: string;
	language: string;
};

export interface Person extends Record {
	domains?: string[];

	authorisedName: Name;

	academicTitle?: string;

	yearOfBirth?: string;

	yearOfDeath?: string;

	emailAddress?: string;

	alternativeNames?: Name[];

	externalURLs?: ExternalUrl[];

	otherAffiliation?: {
		affiliation: string;
		affiliationFromYear: string;
		affiliationUntilYear: string;
	}[];

	orcids?: string[];

	viafIDs?: string[];

	librisIDs?: string[];

	biographyEnglish?: Biography;

	biographySwedish?: Biography;

	personDomainPart?: string[];
}