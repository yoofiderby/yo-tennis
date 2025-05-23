'use client'

import { useCallback, useEffect, useState, forwardRef } from 'react'
import { Box, Select, Stack, Text } from '@sanity/ui'
import { useFormValue, useClient, PatchEvent, set } from 'sanity'

const SubPackageSelect = forwardRef(function SubPackageSelect(props, ref) {
  const [subPackages, setSubPackages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const client = useClient({ apiVersion: '2023-05-03' })

  const classRef = useFormValue(['class', '_ref'])
 
  useEffect(() => {
    async function fetchSubPackages() {
      if (!classRef) {
        setSubPackages([])
        return
      }

      setLoading(true)
      try {
        const query = `*[_type == "class" && _id == $classId][0]{
          "subPackages": subPackages[]{
            _key,
            title,
            price
          }
        }`

        const result = await client.fetch(query, { classId: classRef })
        console.log('Fetched result:', result)
        setSubPackages(result?.subPackages || [])
      } catch (err) {
        console.error('Error fetching subPackages:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSubPackages()
  }, [classRef, client])

  const handleChange = useCallback((event) => {
    const selectedValue = event.target.value
   
    // Create a patch event using PatchEvent.from and set helper
    props.onChange(
      PatchEvent.from(set(selectedValue))
    )
  }, [props.onChange])

  if (loading) {
    return <Text>Loading sub packages...</Text>
  }

  if (error) {
    return <Text>Error loading sub packages: {error}</Text>
  }

  if (!classRef) {
    return <Text>Please select a class first</Text>
  }

  return (
    <Stack space={3}>
      <Select
        ref={ref}
        value={props.value || ''}
        onChange={handleChange}
        disabled={loading || subPackages.length === 0}
      >
        <option value="">Select a sub package</option>
        {subPackages.map((pkg) => (
          <option key={pkg._key} value={pkg._key}>
            {pkg.title} - ${pkg.price}
          </option>
        ))}
      </Select>
      {subPackages.length === 0 && !loading && (
        <Text size={1} style={{ color: '#666' }}>
          No sub packages found for this class
        </Text>
      )}
    </Stack>
  )
})

export default SubPackageSelect 