import { parseYouTubeRequest } from "./parser";

describe('YouTube request parser', () => {
    it('parses a valid request with consent', () => {
        const request = "https://www.youtube.com/embed/AE0xPBXxFkM?modestbranding=1&origin=https%3A%2F%2Fwww.theguardian.com&playsinline=1&rel=0&embed_config=%7B%22relatedChannels%22%3A%5B%5D%2C%22adsConfig%22%3A%7B%22adTagParameters%22%3A%7B%22iu%22%3A%22%2F59666047%2Ftheguardian.com%2Fpolitics%2Fliveblog%2Fng%22%2C%22cust_params%22%3A%22sens%253Df%2526si%253Df%2526vl%253D0%2526cc%253DUK%2526s%253Dpolitics%2526inskin%253Df%2526se%253Dpolitics-live-with-andrew-sparrow%2526ct%253Dliveblog%2526co%253Dandrewsparrow%252Carchie-bland%252Clisaocarroll%2526url%253D%25252Fpolitics%25252Flive%25252F2022%25252Fmay%25252F10%25252Fminister-says-queens-speech-will-tackle-hooligan-protesters-amid-concerns-non-tory-bills-left-out%2526su%253D4%252C5%252C1%252C2%252C3%2526edition%253Duk%2526tn%253Dminutebyminute%252Cnews%2526p%253Dng%2526k%253Deconomy%252Cpolitics%252Cconservatives%252Cqueens-speech%252Cuk%25252Fuk%252Cboris-johnson%252Ctradeunions%252Cnorthernireland%252Cireland%252Ceu-referendum%252Ckeir-starmer%252Clabour%2526sh%253Dhttps%25253A%25252F%25252Fwww.theguardian.com%25252Fp%25252Fydh4n%2526pa%253Df%2526urlkw%253Dminister%252Csays%252Cqueens%252Cspeech%252Cwill%252Ctackle%252Chooligan%252Cprotesters%252Camid%252Cconcerns%252Cnon%252Ctory%252Cbills%252Cleft%252Cout%2526permutive%253D23527%252C24083%252C24089%252C24091%252C24495%252C24509%252C24525%252C24538%252C24558%252C24561%252C24565%252C24566%252C24571%252C24581%252C24583%252C24594%252C24599%252C24601%252C24603%252C24604%252C24605%252C24607%252C24608%252C24611%252C24612%252C24615%252C24616%252C24618%252C24619%252C24624%252C24627%252C24632%252C24633%252C24639%252C24645%252C24646%252C24647%252C24650%252C24652%252C24654%252C24655%252C24656%252C24657%252C24658%252C24659%252C24661%252C24676%252C24677%252C24678%252C24679%252C24680%252C24682%252C24684%252C24686%252C24688%252C24689%252C24690%252C24691%252C24692%252C24693%252C24694%252C24695%252C24699%252C24753%252C24757%252C24763%252C24977%252C24983%252C24984%252C24985%252C25031%252C25061%252C25079%252C25086%252C25180%252C25367%252C25457%252C25471%252C25472%252C25480%252C25484%252C25500%252C26030%252C26130%252C26419%252C26534%252C26749%252C26822%252C27564%252C27592%252C27631%252C28008%252C28478%252C28479%252C28985%252C29249%252C29317%252C29431%252C31044%252C31207%252C31250%252C31251%252C31757%252C31954%252C32322%252C32328%252C32388%252C32484%252C32510%252C32737%252C32738%252C32773%252C33126%252C33129%252C33379%252C33392%252C34312%252C34372%252C37158%252C37344%252C37434%252C37673%252C37751%252C38185%252C39636%252C39994%252C39996%252C40032%252C40123%252C40192%252C40205%252C40271%252C40273%252C40852%252C40961%252C40986%252C42134%252C42135%252C42233%252C43270%252C43272%252C43599%252C43850%252C47026%252C47509%252C47834%252C48018%252C49820%252C50447%252C50932%252C51653%252C52501%252C52698%252C52945%252C52946%252C53104%252C53220%252C53278%252C53290%252C53293%252C53301%252C53793%252C54438%252C54565%252C54759%252C54952%252C55191%252C55237%252C56521%252C56617%252C56792%252C56848%252C57824%252C59453%252C59934%252C60110%252C60164%252C60459%252C60460%252C60722%252C60835%252C60906%252C61623%252C61624%252C61625%252C62154%252C62176%252C62177%252C62332%252C62597%252C62605%252C64286%252C64482%252C64816%252C64866%252C64932%252C66587%252C66654%252C66655%252C67162%252C67163%252C69195%252C69480%252C70011%252C71154%252C73168%252C73169%252C73177%252C74853%252C75241%252C75539%252C75590%252C75667%252C75977%252C76330%252C76453%252C77558%252C77562%252C77683%252C77872%252C79104%252C79116%252C79204%252C79231%252C79492%252C80376%252C80377%252C81084%252C81511%252C81541%252C81748%252C81809%252C81826%252C82082%252C82083%252C82086%252C82087%252C82091%252C82093%252C82098%252C82349%252C82400%252C82401%252C82404%252C82405%252C82406%252C82407%252C82408%252C82409%252C82417%22%2C%22cmpGdpr%22%3A1%2C%22cmpGvcd%22%3A%221~46.1301.70.1843.108.1878.440.3119.1097.196.202.89.2918.149.338.1205.2035.415.1415.2677.482.505.494.486.981.1456.89.2090%22%2C%22cmpVcd%22%3A%22CPTHoTJPTHoTJAGABCENB-CgAP_AAG_AAAQ4IDtB9S7eTWMDeH5_Y7t0cYUX1R5_oeAijgEAF4IBwRKUIIwWEGAyJESIBqACEAYAIiJAIAdkGEAAAEAAYIABAAHIAEAEKAAAIAIEGAABAgIACAAIAAAAEAAQgAAUECAgiAAAcJYgSAAABAAAAAAAAAgEAAAAAgAAAAAAAAAAAAAAACgbRAhAAcABcAEIAOQAfgBkADQAG0ARwAkQBZgC5AHUAO6Ag4CEAERAJ2AT8ApYBbQC6wGAAYEAzIBrADXwHUAdUA7YB_wEPgJiAXaAxYBtAB4yAOAEwARwBHAEnAJiAWwAvMRAGAEMANkA1gB1QEOgMnEAAQASBIEwACwAKgAZAA5AB4AIAAZAA8gCIAIoATAAngBVADmAHoAPwAhABDACIAEcAJYATQApQBbgDZAHsAPgAfoBAwCOAEpANYAcQBDoCYgFsALzAYaAyQBk4QAEACQApYaAQAIYAbMBaAFpANYAdUBDoDGAGTioBAATABHAEcgLQAtICQQExALYAXmOgaAALAAqABkADkAHwAggBiAGQAPAAfQBEAEUAJgATwAqgBdAC-AGIAMwAcwA9AB-AEMAIgARwAlgBMACaAFGAKUAWIAtwBhADRAGyAPYAfoBAwCLAEcAJTAWgBaQC6gF5AOIAdQBDoCQQFsALtAXmAw0BjADJAGTjgAQAJABSEICwACwAMgAxACYAFUAL4AYgAzAB6AEcALEAYQBHACUwFoAWkA6gCQQEnALYAXaAycBwBAACAKQlAfAAWABkADgAHwAYgA8ACIAEwAKoAXwAxABmADaAIYARAAjgBRgClAFuAMIAbIBHIC0ALSAXUA6gCHQFsALtAXmAycBwBIACAKQpAoAAWABUADIAHIAPgBBADEAMgAeQBEAEUAJgATwApABVAC-AGIAMwAcwA_ACGAEQAKMAUoAsQBbgDCAGiANkAfoBFgCOAEpALyAh0BJwC2AF2gLzAYaAxgBkgDJygAIAEgApAAA.YAAAAAAAAAAA%22%7D%2C%22nonPersonalizedAd%22%3Afalse%7D%7D&enablejsapi=1&widgetid=1";
        const parsedRequest = parseYouTubeRequest(request);
        const requestObject = JSON.parse(parsedRequest);
        const embedConfig = requestObject.embed_config;
        const adsConfig = embedConfig.adsConfig;
        const adTagParameters = adsConfig.adTagParameters;
        const custParams = adTagParameters.cust_params;
        // consent
        expect(adTagParameters).toEqual(
            expect.objectContaining({
                cmpGdpr: 1,
                cmpGvcd: "1~46.1301.70.1843.108.1878.440.3119.1097.196.202.89.2918.149.338.1205.2035.415.1415.2677.482.505.494.486.981.1456.89.2090",
                cmpVcd: "CPTHoTJPTHoTJAGABCENB-CgAP_AAG_AAAQ4IDtB9S7eTWMDeH5_Y7t0cYUX1R5_oeAijgEAF4IBwRKUIIwWEGAyJESIBqACEAYAIiJAIAdkGEAAAEAAYIABAAHIAEAEKAAAIAIEGAABAgIACAAIAAAAEAAQgAAUECAgiAAAcJYgSAAABAAAAAAAAAgEAAAAAgAAAAAAAAAAAAAAACgbRAhAAcABcAEIAOQAfgBkADQAG0ARwAkQBZgC5AHUAO6Ag4CEAERAJ2AT8ApYBbQC6wGAAYEAzIBrADXwHUAdUA7YB_wEPgJiAXaAxYBtAB4yAOAEwARwBHAEnAJiAWwAvMRAGAEMANkA1gB1QEOgMnEAAQASBIEwACwAKgAZAA5AB4AIAAZAA8gCIAIoATAAngBVADmAHoAPwAhABDACIAEcAJYATQApQBbgDZAHsAPgAfoBAwCOAEpANYAcQBDoCYgFsALzAYaAyQBk4QAEACQApYaAQAIYAbMBaAFpANYAdUBDoDGAGTioBAATABHAEcgLQAtICQQExALYAXmOgaAALAAqABkADkAHwAggBiAGQAPAAfQBEAEUAJgATwAqgBdAC-AGIAMwAcwA9AB-AEMAIgARwAlgBMACaAFGAKUAWIAtwBhADRAGyAPYAfoBAwCLAEcAJTAWgBaQC6gF5AOIAdQBDoCQQFsALtAXmAw0BjADJAGTjgAQAJABSEICwACwAMgAxACYAFUAL4AYgAzAB6AEcALEAYQBHACUwFoAWkA6gCQQEnALYAXaAycBwBAACAKQlAfAAWABkADgAHwAYgA8ACIAEwAKoAXwAxABmADaAIYARAAjgBRgClAFuAMIAbIBHIC0ALSAXUA6gCHQFsALtAXmAycBwBIACAKQpAoAAWABUADIAHIAPgBBADEAMgAeQBEAEUAJgATwApABVAC-AGIAMwAcwA_ACGAEQAKMAUoAsQBbgDCAGiANkAfoBFgCOAEpALyAh0BJwC2AF2gLzAYaAxgBkgDJygAIAEgApAAA.YAAAAAAAAAAA",
            })
        );
        expect(adsConfig.nonPersonalizedAd).toBe(false);
        // cust_params
        expect(custParams).toEqual(
            expect.objectContaining({
                k: ["economy", "politics", "conservatives", "queens-speech", "uk/uk", "boris-johnson", "tradeunions", "northernireland", "ireland", "eu-referendum", "keir-starmer", "labour"],
                permutive: expect.any(Array),
            })
        );
        // player config
        expect(requestObject).toEqual(
            expect.objectContaining({
                enablejsapi: "1",
                modestbranding: "1",
                origin: "https://www.theguardian.com",
                playsinline: "1",
                rel: "0",
                widgetid: "1"
            })
        );
    });
});
