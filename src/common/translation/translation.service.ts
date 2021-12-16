import { Injectable } from '@nestjs/common';
import * as googleTranslateApi from '@vitalets/google-translate-api';

@Injectable()
export class TranslationService {
    private async translate(text: string): Promise<string> {
        const res = await googleTranslateApi(text, { from: 'en', to: 'fr' })

        const translatedText = res.text

        return translatedText
    }

    public async translatedData(object: any): Promise<any> {
        const keys = Object.keys(object)

        let englishData: string = ''

        for (let key of keys) {
            console.log(key)
            if (typeof object[key] != 'boolean') {
                if (object[key] != null && object[key] != '' && object[key] != 'null' && typeof object[key] != 'object' && typeof object[key] != 'number' && !object[key].includes('https') && !object[key].match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/) && !Array.isArray(object[key])) {
                    englishData += `${object[key]}\n\n`
                }

                if (object[key] != null && object[key] != '' && object[key] != 'null' && typeof object[key] == 'object' && !Array.isArray(object[key])) {
                    object[key] = await this.translatedData(object[key])
                }
            }
        }

        const translatedText = await this.translate(englishData)

        const arabicData = translatedText.split(`\n\n`)

        let indexArr: number = 0

        for (let key of keys) {
            if (typeof object[key] != 'boolean') {
                if (object[key] != null && object[key] != '' && object[key] != 'null' && typeof object[key] != 'number' && !object[key].includes('https') && !Array.isArray(object[key]) && !object[key].match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)) {
                    object[key] = arabicData[indexArr]
                    indexArr++
                }
            }
        }

        return object;
    }
}
