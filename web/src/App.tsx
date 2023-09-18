import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Textarea } from "./components/ui/textarea";
import { Separator } from "./components/ui/separator";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="px-6 py-3 flex items-center justify-between border-b">
          <h1 className="text-xl font-bold ">Transcribot.ai</h1>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Github 🤖
            </Button>
          </div>
        </header>

        <main className="flex-1 p-6 md:flex md:gap-6">
          <section className="flex flex-col flex-1 gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea
                placeholder="Adicione o prompt para a AI"
                className="resize-none p-4 leading-relaxed text-sm"
              />
              <Textarea
                placeholder="Resultado gerado pela AI...."
                readOnly
                className="resize-none p-4 leading-relaxed text-sm cursor-not-allowed"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Lembre-se: Você pode usar a variável{" "}
              <code className="text-emerald-400">{"{transcription}"} </code> no
              seu prompt para adicionar o conteúdo da transcrição do vídeo
              selecionado
            </p>
          </section>

          <aside className="w-full md:w-80 space-y-6">
            <form className="space-y-6">
              <label
                htmlFor="video"
                className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-slate-900/90 "
              >
                <FileVideo className="w-4 h-4" />
                Upload Video
              </label>

              <input
                type="file"
                id="video"
                accept="video/mp4"
                placeholder="upload"
                className="sr-only"
              />

              <Separator />

              <div className="space-y-1">
                <Label htmlFor="transcription_prompt">
                  Prompt de transcrição
                </Label>

                <Textarea
                  id="transcription_prompt"
                  className="h-20 resize-none leading-relaxed"
                  placeholder="Adicione palavras-chaves mencionadas no vídeo separadas por vírgulas"
                />
              </div>
              <Button type="submit" className="w-full">
                Carregar vídeo
                <Upload className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <Separator />

            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="">Prompt</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt......." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Título do Youtube</SelectItem>
                    <SelectItem value="description">
                      Descrição do Youtube
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="">Modelo</label>
                <Select disabled defaultValue="gpt3.5">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className="block text-xs text-muted-foreground italic leading-relaxed">
                  Você poderá customizar essa opção em breve....
                </span>
              </div>

              <Separator />

              <div className="space-y-4">
                <label htmlFor="">Temperatura</label>
                <Slider min={0} max={1} step={0.1} className="cursor-grab" />

                <span className="block text-xs text-muted-foreground italic leading-relaxed">
                  Valores mais altos tendem a deixar o resultado mais criativo e
                  com possíveis erros
                </span>
              </div>
            </form>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </aside>
        </main>
      </div>
    </>
  );
}
