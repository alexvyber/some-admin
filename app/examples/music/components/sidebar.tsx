import {
  LayoutGrid,
  Library,
  ListMusic,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Radio,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Playlist } from "../data/playlists"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="py-4 space-y-4">
        <div className="py-2 px-4">
          <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              size="sm"
              className="justify-start w-full"
            >
              <PlayCircle className="mr-2 w-4 h-4" />
              Listen Now
            </Button>
            <Button variant="ghost" size="sm" className="justify-start w-full">
              <LayoutGrid className="mr-2 w-4 h-4" />
              Browse
            </Button>
            <Button variant="ghost" size="sm" className="justify-start w-full">
              <Radio className="mr-2 w-4 h-4" />
              Radio
            </Button>
          </div>
        </div>
        <div className="py-2 px-4">
          <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="justify-start w-full">
              <ListMusic className="mr-2 w-4 h-4" />
              Playlists
            </Button>
            <Button variant="ghost" size="sm" className="justify-start w-full">
              <Music2 className="mr-2 w-4 h-4" />
              Songs
            </Button>
            <Button variant="ghost" size="sm" className="justify-start w-full">
              <User className="mr-2 w-4 h-4" />
              Made for You
            </Button>
            <Button variant="ghost" size="sm" className="justify-start w-full">
              <Mic2 className="mr-2 w-4 h-4" />
              Artists
            </Button>
            <Button variant="ghost" size="sm" className="justify-start w-full">
              <Library className="mr-2 w-4 h-4" />
              Albums
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-6 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="px-2 h-[300px]">
            <div className="p-2 space-y-1">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  size="sm"
                  className="justify-start w-full font-normal"
                >
                  <ListMusic className="mr-2 w-4 h-4" />
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
