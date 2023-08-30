import React from "react"
import Link from "next/link"

const SpekSingkat = ({ props }) => {
  return (
    <div className="pb-5">
      <div className="flex px-4 py-4 overflow-auto gap-x-3">
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">L.Bangunan</h1>
          <p className="text-sm text-medium text-black/60">
            {props.luas_bangunan}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">
            L.Tanah/Keseluruhan
          </h1>
          <p className="text-sm text-medium text-black/60">
            {props?.luas_keseluruhan}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">K.Mandi</h1>
          <p className="text-sm text-medium text-black/60">
            {props?.kamar_mandi}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">K.Tidur</h1>
          <p className="text-sm text-medium text-black/60">
            {props?.kamar_tidur}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">Lantai</h1>
          <p className="text-sm text-medium text-black/60">{props?.lantai}</p>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">Pemandangan</h1>
          <p className="text-xs text-medium text-black/60">
            {props?.pemandangan}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpekSingkat
