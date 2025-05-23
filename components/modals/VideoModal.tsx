import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl mx-4">
        <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden bg-black">
          <video
            src={videoUrl}
            autoPlay
            controls
            className="absolute top-0 left-0 w-full h-full"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )

  // Use createPortal to render the modal at the document root
  return typeof document !== 'undefined' 
    ? createPortal(modalContent, document.body)
    : null
}

export default VideoModal 